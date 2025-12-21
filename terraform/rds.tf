resource "aws_db_instance" "mysql" {
  identifier = "ecommerce-mysql-db"

  engine         = "mysql"
  engine_version = "8.0"          # SAFE & SUPPORTED
  instance_class = "db.t3.micro"

  allocated_storage = 20
  storage_type      = "gp2"

  db_name  = var.db_name
  username = var.db_username
  password = var.db_password

  db_subnet_group_name   = aws_db_subnet_group.rds_private_subnet_group.name
  vpc_security_group_ids = [aws_security_group.rds_sg.id]

  publicly_accessible = true
  multi_az            = false
  skip_final_snapshot = true

  tags = {
    Name = "ecommerce-rds-mysql"
  }
}
