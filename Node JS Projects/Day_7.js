// Table Altering Example

// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "C_Allcroft29",
//     password: "Marauders29?",
//     database: "mydb"
// });

// var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

// con.connect(function (err) {
//     if (err) throw (err);
//     console.log("Connected!");
//     con.query(sql, function(err, result) {
//         if (err) throw (err);
//         console.log("Table Altered!")
//     });
// });

// Data Insertion Example

// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "C_Allcroft29",
//     password: "Marauders29?",
//     database: "mydb"
// });

// var sql = "INSERT INTO customers (name, address) VALUES ('McFlusion Corp.', '1500 Sandhill Drive')";

// con.connect(function (err) {
//     if (err) throw (err);
//     console.log("Connected!");
//     con.query(sql, function(err, result) {
//         if (err) throw (err);
//         console.log("1 Record Inserted!")
//     });
// });