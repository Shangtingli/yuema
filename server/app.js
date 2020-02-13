
const express = require( 'express' );
// instanciate an instance of express and hold the value in a constant called app
const app     = express();
//require the body-parser library. will be used for parsing body requests
const bodyParser = require('body-parser')
//require the path library
const path    = require( 'path' );
const fetch = require('node-fetch');
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const HOST = 'http://localhost:8080';
// use the bodyparser as a middleware
app.use(bodyParser.json())
// set port for the app to listen on
app.set( 'port', process.env.PORT || 3003 );
// set path to serve static files
// enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/api/validateUser',function (req, res){
    const username = req.body.username;
    const password = req.body.password;
    fetch(HOST + '/validateUser', {
        method: 'POST',
        body: JSON.stringify({username:username,password:password}),
        headers: headers,
    }).then((response) => {
        return response.text();
    }).then((response) => {
        res.send(response);
    })
});

app.post('/api/addUser',function(req,res){
    const username = ('username' in req.body) ? req.body.username : req.body.email;
    const password = req.body.password;
    fetch(HOST + '/addUser',{
        method:'POST',
        body: JSON.stringify({username:username, password: password}),
        headers: headers
    }).then((response) => {
        return response.text();
    }).then((response) =>{
        res.send(response);
    })
})

app.post('/api/getFeatures',function(req,res){
    const email = ('username' in req.body) ? req.body.username : req.body.email;
    const obj = {email:email};
    fetch(HOST + '/traveller/getTraveller', {
        method:'POST',
        body: JSON.stringify(obj),
        headers: headers
    }).then((response) => {
        return response.text();
    }).then((response) => {
        res.send(response);
    })
});


app.post('/api/saveFeatures',function(req,res){
    const email = ('username' in req.body) ? req.body.username : req.body.email;
    const sexualOrien = req.body.sexualOrien;
    const nickName = req.body.nickName;
    const phoneNumber = req.body.phoneNumber;
    const obj = {email:email, sexualOrien: sexualOrien, nickName: nickName, phoneNumber: phoneNumber};
    fetch(HOST + '/traveller/addTraveller',{
        method:'POST',
        body: JSON.stringify(obj),
        headers: headers
    }).then((response) => {
        return response.text();
    }).then((response)=>{
        res.send(response);
    })
})
// listen on the specified port
app.listen( app.get( 'port' ), function(){
    console.log( 'Express server listening on port ' + app.get( 'port' ));
} );