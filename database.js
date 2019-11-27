var mysql = require('mysql');
var Handshake = require('handshake');
var connection = mysql.createConnection({
  host: '52.184.32.252',
  user: 'root',
  password: 'test',
  database: 'tienden'
  

   
});
var db = connection.query;
connection.connect(function (err) {
  if (err) throw err;
});

module.exports = {
  getAllData,
  getAllDataByID,
  getbookqueue,
  getbookqueueByID,
  gethistory,
  getappoints,
  insertbookq,
  insertdate,
  inserttime,
  deletequeue,
  updatebook
  // gethistoryiiByID,
  // getbookqueue,
  // getappoins,
  // getbookqueueByID

};


//DataCustomer
function getAllData(req, res) {
  connection.query("SELECT * from customer;", function (error, results, fields) {
    if (error) throw error;
    res.status(200)
      .json({
        status: 'success',
        data: results,
        message: 'Retrieved ALL customer'
      });
  });
}

function getAllDataByID(req, res) {
  console.log(req.param.id);
  connection.query(`SELECT * from customer where Customernum= ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    res.status(200)
      .json({
        status: 'success',
        data: results,
        message: 'Retrieved ALL Login  customer :'+req.params.id
      });
  });
}

//Bookqueue
function getbookqueue(req, res) {
  connection.query("SELECT * from book ORDER BY start DESC ;", function (error, results, fields) {
    if (error) throw error;
    res.status(200)
      .json({
        status: 'success',
        data: results,
        message: 'Retrieved ALL bookqueue'
      });
  });
}


function getbookqueueByID(req, res) {
  console.log(req.param.id);
  connection.query(`SELECT * from book where CusID = ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    res.status(200)
      .json({
        status: 'success',
        data: results,
        message: 'Retrieved ALL bookqueue :'+req.params.id
      });
  });
}

//insertBookqueue
function insertbookq(req, res) {
console.log(res);

console.log(req.query);
   
res.send();

  //Insert a record in the "customers" table:
  var sql = "INSERT INTO book  VALUES ("+req.query.BookID+",'"+req.query.start+"','"+req.query.Time+"','"+req.query.Detail+"',"+req.query.Status+",'"+req.query.Type+"','"+req.query.end+"','"+req.query.alert+"','"+req.query.situation+"','"+req.query.dayofweek+"',"+req.query.CusID+")";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

}

//insertDate
function insertdate(req, res) {
  console.log(res);
  
  console.log(req.query);
     
  res.send();
  
    
    var sql = "INSERT INTO date VALUES ("+req.query.DetID+",'"+req.query.start+"')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  
  }

  //insertTime
  function inserttime(req, res) {
    console.log(res);
    
    console.log(req.query);
       
    res.send();
    
      
      var sql = "INSERT INTO time   VALUES ("+req.query.TimeID+",'"+req.query.Time+"')";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    
    }

//History
function gethistory(req, res) {
  console.log(req.param.id);
  connection.query(`SELECT * from history ORDER BY start DESC`, function (error, results, fields) {
    if (error) throw error;
    res.status(200)
      .json({
        status: 'success',
        data: results,
        message: 'Retrieved ALL history'
      });
  });
}  

//appointments
function getappoints(req, res) {
  connection.query("SELECT * from appoints  ;", function (error, results, fields) {
    if (error) throw error;
    res.status(200)
      .json({
        status: 'success',
        data: results,
        message: 'Retrieved ALL appoints'
      });
  });
}

//Delete

function deletequeue(req, res) {
  console.log(req.param.id);
  connection.query(`DELETE FROM book where BookID = ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    res.status(200)
      .json({
        status: 'success',
        data: results,
        message: 'Retrieved ALL bookqueue :'+req.params.id
      });
  });
}

function updatebook(req, res) {
  console.log(res);
    
    console.log(req.query);
       
    res.send();
    
      
      var sql = "UPDATE book SET situation = '1' WHERE BookID = '+req.query.situation+'";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    
    }










