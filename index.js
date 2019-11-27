var express = require('express');
var app = express();
var cors = require('cors')
var db = require('./database');
var bodyParser = require('body-parser');
app.use(bodyParser.json());  //ทำงานกับข้อมูลเจสัน ตัวนี้สำคัญมากกกกก
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());//app.use(express.static('static'));

// index page
app.get('/', function (req, res) {
    res.send('Express is running');
});

// api
app.get('/json', function (req, res) {
    res.status(200).json(output);

});
var output = {
    status: 'success',
    message: 'REST API is working'
}

// create table
//get
app.get('/customer',db.getAllData);
app.get('/book',db.getbookqueue);
app.get('/appoints',db.getappoints);
app.get('/customer/:id',db.getAllDataByID);
app.get('/book/:id',db.getbookqueueByID);
app.get('/history',db.gethistory);
//post
app.post('/book',db.insertbookq);
app.post('/date',db.insertdate);
app.post('/time',db.inserttime);
//delete
app.delete('/book/:id', db.deletequeue);
//update
app.put('/book/id',db.updatebook);


   


var port = process.env.PORT || 8002;
app.listen(port, function () {
    console.log('App is running on http://52.184.32.252/:' + port);
});