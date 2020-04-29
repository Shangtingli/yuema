# echo "export FLASK_APP=\"/home/ec2-user/flask-server-ml/index.py\"" >> ~/.bash_profile
# source ~/.bash_profile
export FLASK_APP=/home/ec2-user/index.py
flask run --host=0.0.0.0
