// var http = require('http');

// var sql = require('mysql');

// var formidable = require('formidable');

// http.createServer(function (req, res) {
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function (err, fields, files) {
//             var name = fields.user_name;
//             res.write('User Name - ' + name);
//             res.end();
//         });
//     } 
//     else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="text" name="user_name" placeholder="Name"><br>');
//         res.write('<input type="number" name="user_age" placeholder="Age"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
//     }).listen(8080);

// Connection to Database via Node + Querying DB

// var mysql = require('mysql');

// var query = "SELECT * FROM sys_config";

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "C_Allcroft29",
//   password: "Marauders29?",
//   database: "sys"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  
//   con.query(query, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result[2].value);
// });
// });

// DB Creation

// var mysql = require('mysql');

// var query = "CREATE DATABASE my_class";

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "C_Allcroft29",
//   password: "Marauders29?",
//   database: "sys"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  
//   con.query(query, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
// });
// });

// Table Creation

// var mysql = require('mysql');

// var query = "USE my_class";

// var query1 = "CREATE TABLE student (name varchar(50), age int, location varchar(50))";

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "C_Allcroft29",
//   password: "Marauders29?",
//   database: "sys"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  
//     con.query(query, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//     });

//     con.query(query1, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//     });
// });

// User Input on Form Entered to DB Example

var http = require('http');

var formidable = require('formidable');

var mysql = require('mysql');

http.createServer(function (req, res) {
    if (req.url == '/formupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var name = fields.user_name
            var age = fields.user_age
            var city = fields.user_location
            var query = "INSERT INTO student VALUES ('" + name + "','" + age + "','" + city + "')";
            var con = mysql.createConnection({
                host: "localhost",
                user: "C_Allcroft29",
                password: "Marauders29?",
                database: "my_class"
              });
              con.connect(function(err) {
                if (err) throw err;
                con.query(query, function (err, result) {
                  if (err) throw err;
                  console.log("Result: " + result);
                  res.write('Data inserted to database');
                  res.end();
              });
              });
        });
    }
    else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="formupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="text" name="user_name" placeholder="Name" required><br>');
    res.write('<input type="number" name="user_age" placeholder="Age" required><br>');
    res.write('<input type="text" name="user_location" placeholder="Location" required><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    }
}).listen(8080);