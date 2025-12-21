resource "aws_instance" "bastion" {
  ami                    = "ami-068c0051b15cdb816"
  instance_type          = "c7i-flex.large"
  subnet_id              = aws_subnet.public_a.id
  vpc_security_group_ids = [aws_security_group.bastion_sg.id]  # attach SG
  key_name               = "mynewkeypair"

  tags = {
    Name = "bastion-host"
  }
}

resource "aws_instance" "backend" {
  ami = "ami-068c0051b15cdb816"
  instance_type          = "c7i-flex.large"
  subnet_id              = aws_subnet.private_a.id
  vpc_security_group_ids = [ aws_security_group.backend_sg.id ]
  key_name               = "mynewkeypair"
  tags = {
    Name = "backend"
  }
}