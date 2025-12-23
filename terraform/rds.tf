resource "aws_db_instance" "mysql" {
  identifier        = "ecommerce-db"
  engine            = "mysql"
  engine_version    = "8.0"
  instance_class    = "db.t3.micro"
  allocated_storage = 20

  db_name  = var.db_name
  username = var.db_username
  password = var.db_password

  port                = 3306
  publicly_accessible = true # 👈 REQUIRED
  skip_final_snapshot = true

  vpc_security_group_ids = [aws_security_group.rds_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.rds_public_subnet_group.name

  tags = {
    Name = "ecommerce-mysql-rds"
    Env  = "dev"
  }
}
