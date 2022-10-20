// Database Query example

// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "C_Allcroft29",
//     password: "Marauders29?"
//     database: "mydb";
// });

// var sql = "USE sakila"

// con.connect(function (err){
//     if (err) throw (err);
//     console.log("Connected!");
//     con.query(sql, function(err, result){
//         if (err) throw (err);
//         console.log("Result:" + result);
//     });
// });

// Database Creation Example

// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "C_Allcroft29",
//     password: "Marauders29?"
// });

// con.connect(function (err) {
//     if (err) throw (err);
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function(err, result) {
//         if (err) throw (err);
//         console.log("Database Created!")
//     });
// });

// Table Creation Example

// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "C_Allcroft29",
//     password: "Marauders29?",
//     database: "mydb"
// });

// var sql = "CREATE TABLE vendors (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

// con.connect(function (err) {
//     if (err) throw (err);
//     console.log("Connected!");
//     con.query(sql, function(err, result) {
//         if (err) throw (err);
//         console.log("Database Created!")
//     });
// });