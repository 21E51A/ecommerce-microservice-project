resource "aws_db_subnet_group" "rds_public_subnet_group" {
  name = "rds-subnet-group"

  subnet_ids = [
    aws_subnet.public_a.id,
    aws_subnet.public_b.id
  ]
}
