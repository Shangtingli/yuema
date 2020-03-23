/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */
const ML_EC2_ENDPOINT="ec2-3-86-11-149.compute-1.amazonaws.com";
const ML_EC2_PORT = '5000';
const HEADERS = {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json'
};
var express = require('express')
var bodyParser = require('body-parser')
const fetch = require('node-fetch');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});



/****************************
* Example post method *
****************************/

app.post('/', function(req, res) {
    // Add your code here
    var response = {
        statusCode: 200,
        headers: HEADERS,
        body: JSON.stringify({success: 'post call succeed!', url: req.url, body: req.body})
    };

    res.json(response);
});

app.post('/content-based/user', function(req, res) {

    fetch(`${ML_EC2_ENDPOINT}:${ML_EC2_PORT}`,
        {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: HEADERS,
        }).then((response)=>{
        // Add your code here
        var response = {
            statusCode: 200,
            headers: HEADERS,
            // body: JSON.stringify({success: 'post call succeed!', url: req.url, body: response})
        };

        res.json(response);
    })

});

app.post('/user-based/store', function(req, res) {
  // Add your code here
    var response = {
        statusCode: 200,
        headers: HEADERS,
        body: JSON.stringify({success: 'post call succeed!', url: req.url, body: req.body})
    };

    res.json(response);
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
