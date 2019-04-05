
const express = require('express');
const app = express();


//The arrow functionality is a little confusing so if you don't get it 
//don't worry.  It's equivalent  calling "function" like in the other routes
app.get('/', (req, res) => res.send('Hello World!'));


app.get('/test-route', function(req,res) {
	console.log("When you go to \'/test-route\' the logic inside this function is called");
	console.log("These console logs get printed to terminal not the browser");
	//you always have to send a response res
	res.send("This is my response to the browser.  It appears on the website.");
});


app.get('/test-json-route', function(req,res) {
	//you can also send json to the browser like so:
	res.json({key1 : "value1", key2: 'value2'});
});

app.get('/test-html-route', function(req,res){
	//we are probably going to have a few pages that we'll send from here
	res.sendFile("index.html");
});

app.listen(5000);