resource "aws_instance" "bastion" {
  ami                    = "ami-068c0051b15cdb816"
  instance_type          = "c7i-flex.large"
  subnet_id              = aws_subnet.public_a.id
  vpc_security_group_ids = [aws_security_group.bastion_sg.id]
  key_name               = "mynewkeypair"

  tags = {
    Name = "bastion-host"
  }
}
