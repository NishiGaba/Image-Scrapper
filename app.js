var express 			= 	require('express');
var bodyParser 			= 	require('body-parser');
var path 				= 	require('path');

var mongo				=	require('mongodb');
var mongoose			=	require('mongoose');
var db 					=	mongoose.connection;

var app = express();

//Body-Parser
app.use(bodyParser.json());

//Static Files
app.use(express.static(path.join(__dirname, 'public')));


/* ***************************************************************** */
//Defining Routes
var imageRoute = require('./routes/images');

//Using Routes
app.use('/images',imageRoute);

/* ***************************************************************** */
mongoose.connect('mongodb://localhost:27017/imageScrap');

//on connection
mongoose.connection.on('connected',()=> {
	console.log('Connected to Local Database');
});

mongoose.connection.on('error',(err)=> {
	if(err) {
		console.log('Error in Database connection '+ err);
	}
});

//testing server
app.get('/',(req,res)=>{
	res.send('Welcome to Image Scrap Board!!!');
});

module.exports = app;

