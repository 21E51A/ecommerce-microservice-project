terraform {
  backend "s3" {
    bucket         = "ecommerce-terraform-state-24-12-2025"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }
}
