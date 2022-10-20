// Simple Create Server Example

// var http = require('http');

// http.createServer(function (req, res) 
// {
// res.write("I made the NodeJS work.")
// res.end();
// }).listen(8080);

// Simple Console Logging function

// var hello = function(){
//     console.log('Hello.');
// }

// hello()

// Another Create Server Example

// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);

// Unknown Example

// exports.myDateTime = function () {
//     return Date();
//     };

// var http = require('http');

// http.createServer(function (req, res) {
//     var test = (req.url).toUpperCase()
//     res.write(test)
//     res.end();
// }).listen(8080)

// URL Data Passing Example (url: http://localhost:8080/?name=Connor&age=26)

// var http = require('http');
// var my_url = require('url');

// http.createServer(function (req, res) 
// {
//     var q = my_url.parse(req.url, true).query;
//     res.write(q.name + ' ' + q.age)
//     res.end();
// }).listen(8080);

// File Reading Example

// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {
//         fs.readFile('demofile1.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080)

// FS Append, Open, Write Data Example

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Appended Data.', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
   
// File Deletion Example

// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

// File Renaming Example

// var fs = require('fs');

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });




