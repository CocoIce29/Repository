// URL Returning Data Example

// var url = require('url');

// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

// var q = url.parse(adr,true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// var qdata = q.query; // Returns an object: {year:2017, month: 'february'}
// console.log(qdata.month); // Returns 'february'

// File Server Example

// URL: localhost:8080/demofile1.html

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err,data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

// Package Install and Implement

// Terminal command is: npm install upper-case

// var http = require('http');

// var uc = require('upper-case');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(uc.upperCase("Saucy Saucy"));
//     res.end();
// }).listen(8080);

// Node.js Events

// var fs = require('fs');

// var rs = fs.createReadStream('./demofile2.txt');

// rs.on('open', function() {
//     console.log('The file is open');
// });
