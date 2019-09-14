var mysql = require('mysql');
var Handshake = require('handshake');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'tienden1'
});
var db = connection.query;
connection.connect(function (err) {
  if (err) throw err;
});

module.exports = {
  getAllData,
  getAllDataByID,
  getbookqueue,
  insertbookq,
  insertdate,
  inserttime,
  
  gethistory,
  // gethistoryiiByID,
  // getbookqueue,
  // getappointment,
  // getbookqueueByID

};



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

function getbookqueue(req, res) {
  connection.query("SELECT * from bookq;", function (error, results, fields) {
    if (error) throw error;
    res.status(200)
      .json({
        status: 'success',
        data: results,
        message: 'Retrieved ALL bookqueue'
      });
  });
}


function insertbookq(req, res) {
console.log(res);

console.log(req.query);
   
res.send();

  //Insert a record in the "customers" table:
  var sql = "INSERT INTO bookq  VALUES ("+req.query.BookID+",'"+req.query.Date+"','"+req.query.Time+"','"+req.query.Detail+"',"+req.query.Status+","+req.query.CusID+",'"+req.query.Type+"')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

}

function insertdate(req, res) {
  console.log(res);
  
  console.log(req.query);
     
  res.send();
  
    
    var sql = "INSERT INTO date VALUES ("+req.query.DetID+",'"+req.query.Date+"')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  
  }

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

function gethistory(req, res) {
  console.log(req.param.id);
  connection.query(`SELECT * from history`, function (error, results, fields) {
    if (error) throw error;
    res.status(200)
      .json({
        status: 'success',
        data: results,
        message: 'Retrieved ALL history'
      });
  });
}  





// function gettype(req, res) {
//   console.log(req.param.id);
//   connection.query(`SELECT * from type`, function (error, results, fields) {
//     if (error) throw error;
//     res.status(200)
//       .json({
//         status: 'success',
//         data: results,
//         message: 'Retrieved ALL type'
//       });
//   });
// }

// function gethistoryiiByID(req, res) {
//   console.log(req.param.id);
//   connection.query(`SELECT * from historyii where AID = ${req.params.id}`, function (error, results, fields) {
//     if (error) throw error;
//     res.status(200)
//       .json({
//         status: 'success',
//         data: results,
//         message: 'Retrieved ALL history  AID :'+req.params.id
//       });
//   });
// }



// function getbookqueue(req, res) {
//   console.log(req.param.id);
//   connection.query(`SELECT * from booking`, function (error, results, fields) {
//     if (error) throw error;
//     res.status(200)
//       .json({
//         status: 'success',
//         data: results,
//         message: 'Retrieved ALL booking'
//       });
//   });
// }

// function getappointment(req, res) {
//   console.log(req.param.id);
//   connection.query(`SELECT * from appointment`, function (error, results, fields) {
//     if (error) throw error;
//     res.status(200)
//       .json({
//         status: 'success',
//         data: results,
//         message: 'Retrieved ALL appointment'
//       });
//   });
// }
// function getbookqueueByID(req, res) {
//   console.log(req.param.id);
//   connection.query(`SELECT * from history where HistoryID = ${req.params.id}`, function (error, results, fields) {
//     if (error) throw error;
//     res.status(200)
//       .json({
//         status: 'success',
//         data: results,
//         message: 'Retrieved ALL history  HistoryID :'+req.params.id
//       });
//   });
// }





