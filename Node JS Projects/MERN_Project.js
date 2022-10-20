var http = require('http');

var formidable = require('formidable');

var mysql = require('mysql');

var fs = require('fs');

var use = "USE plum_picks";

http.createServer(function (req, res) {
    if (req.url == '/formupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields) {
            var event_num = fields.event_num
            var odds = fields.odds
            var stake = fields.stake
            var query = "INSERT INTO user_bets VALUES ('" + event_num + "','" + odds + "','" + stake + "')";
            var con = mysql.createConnection({
                host: "localhost",
                user: "C_Allcroft29",
                password: "Marauders29?",
            });
            
            con.connect(function(err) {
                if (err) throw err;
                
                con.query(use, function(err, result){
                    if (err) throw err;
                    console.log("Result: " + result);
                });

                con.query(query, function(err, result) {
                    if (err) throw err;
                    console.log("Result: " + result);
                    res.end();
                });
            });
              
        });
    }
    else {
        fs.readFile("MERN_Project.html", function(err, data) {
            if (err) {
              res.writeHead(500, { "Content-Type": "text/html" });
              res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
            }
            else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(data);
            }
          });
    }
}).listen(8080);