resource "aws_db_subnet_group" "rds_private_subnet_group" {
  name       = "rds-private-subnet-group"
  subnet_ids = [
    aws_subnet.private_a.id,
    aws_subnet.private_b.id
  ]

  tags = {
    Name = "rds-private-subnet-group"
  }
}