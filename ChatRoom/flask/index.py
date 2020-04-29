from flask import Flask,Response
import time,json
app = Flask(__name__)

process_time = 5
headers = {'content-type':'application/json',"Access-Control-Allow-Origin":"*"}
@app.route('/')
def hello_world():
    # response = Response(data={"body":'Hello, World!'},headers=headers)
    
    return Response(response=json.dumps({"body":"Hello World"}),headers=headers)

@app.route('/feature-based/stores')
def process():
    time.sleep(process_time)
    response = Response(response=json.dumps({"content":{'processed_time':process_time,"status":"complete"}}),headers=headers)
    return response