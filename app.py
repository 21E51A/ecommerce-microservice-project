from flask import Flask, jsonify, request
from db import get_db_connection

app = Flask(__name__)

# Health check
@app.route("/health")
def health():
    return {"status": "Backend is running 🚀"}

# DB connectivity test
@app.route("/db")
def db_test():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT DATABASE();")
    db = cursor.fetchone()[0]
    cursor.close()
    conn.close()
    return {"connected_database": db}

# Create user
@app.route("/users", methods=["POST"])
def create_user():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (name) VALUES (%s)",
        (data["name"],)
    )
    conn.commit()
    cursor.close()
    conn.close()
    return {"message": "User created"}, 201

# Get users
@app.route("/users", methods=["GET"])
def get_users():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(users)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
