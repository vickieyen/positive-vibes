//setting up express application
var express = require('express');
var app = express();
//dependencies we installed..
//  body parser allows you to read data that client sends over in a request
var bodyParser = require('body-parser');
//knex allows you to write javascript in order to interact with database
var knex = require('./db/knex');

//mounts body parser as middleware
//  every request that comes into server has to pass through this module
app.use(bodyParser.urlencoded({ extended: false }));
//next line makes possible for server to send static files to the browser
app.use(express.static(__dirname + '/public'));

//next 2 blocks are called routes - handle different types of requests w/
//  different types of responses

//selecting everything from the database and sending back to the client
app.get('/ideas', function(req, res) {
  knex('ideas').select()
  .then(function(data){
    res.send(data);
  });
});

//inserting the data that came in through the request (the form data)
//  into the ideas table in the database.
//  Then, we are redirecting back to the index.
app.post('/ideas', function(req, res) {
  knex('ideas').insert(req.body)
  .then(function(id){
    res.redirect('/');
  });
});

//binding server to port 3000on our computer,
//  making it available at localhost:3000

app.listen(3000, function(){
  console.log('Listening on Port 3000');
});
