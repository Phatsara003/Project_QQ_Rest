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
app.get('/customer',db.getAllData);
app.get('/bookq',db.getbookqueue);
app.get('/customer/:id',db.getAllDataByID);
app.post('/bookq',db.insertbookq);
app.post('/date',db.insertdate);
app.post('/time',db.inserttime);


   


var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});