//require Express
const express = require( 'express' );
// instanciate an instance of express and hold the value in a constant called app
const app     = express();
//require the body-parser library. will be used for parsing body requests
const bodyParser = require('body-parser')
//require the path library
const path    = require( 'path' );
const fetch = require('node-fetch');

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
    fetch('http://localhost:8080/validateUser', {
        method: 'POST',
        body: JSON.stringify({username:username,password:password}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        return response.text();
    }).then((response) => {
        res.send(response);
    })
})


// listen on the specified port
app.listen( app.get( 'port' ), function(){
    console.log( 'Express server listening on port ' + app.get( 'port' ));
} );