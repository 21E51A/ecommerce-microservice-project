variable "aws_region" {
  default = "us-east-1"
}

variable "project_name" {
  default = "ecommerce-microservice-project"
}

variable "vpc_cidr" {
  default = "10.0.0.0/16"
}


variable "db_name" {
  default = "rds"
}

variable "db_username" {
  default = "admin"
}

variable "db_password" {
  description = "RDS master password"
  sensitive   = true
}
