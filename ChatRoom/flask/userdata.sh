#!/bin/bash
sudo su
yum update -y
yum install python-pip -y
pip install flask

#Remember to attach IAM Role for EC2 so it could retrieve objects from S3
aws s3 cp s3://yuema-general/run.sh /home/ec2-user/run.sh
aws s3 cp s3://yuema-general/index.py /home/ec2-user/index.py
aws s3 cp s3://yuema-general/flask.service /home/ec2-user/flask.service
cp /home/ec2-user/run.sh /usr/bin/flask.sh
chmod +x /usr/bin/flask.sh
cp /home/ec2-user/flask.service /etc/systemd/system/flask.service
chmod 644 /etc/systemd/system/flask.service
systemctl start flask.service
systemctl enable flask.service

# yum install git -y
# git clone https://github.com/Shangtingli/flask-server-ml /home/ec2-user/flask-server-ml
# cp /home/ec2-user/flask-server-ml/run.sh /usr/bin/flask.sh
# chmod +x /usr/bin/flask.sh
# cp /home/ec2-user/flask-server-ml/flask.service /etc/systemd/system/flask.service
# chmod 644 /etc/systemd/system/flask.service
# systemctl start flask.service
# systemctl enable flask.service



