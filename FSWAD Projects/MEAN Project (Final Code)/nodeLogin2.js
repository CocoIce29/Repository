var http = require('http');
var fs = require('fs')
const querystring = require('querystring')


http.createServer(function (req, res) {
    if (req.url == '/login') {

        var body = "";

        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function (req) {

            var postData = querystring.decode(body)

            console.log(postData);

            var Mongo = require('mongodb').MongoClient;

            var url = "mongodb+srv://C_Allcroft29:Marauders29%3F@calmongodb.qbyvrif.mongodb.net/?retryWrites=true&w=majority";

            Mongo.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("PlumPicks");
        
                var user = {username: postData.uname, password: postData.pword};

                dbo.collection("Users").findOne(user, function(err, result) {
                    if (err) throw err;

                    if(result==null){
                        console.log('User not found.');
                        fs.readFile("ErrorPage.html", function(err, data) {
                            if (err) {
                                res.writeHead(500, { "Content-Type": "text/html" });
                                res.end("<html><head><title>Error</title></head><body><h1>There was an error, please try again.</h1><a href='https://localhost:8000'></html>");
                            }
                            else {
                                res.writeHead(200, { "Content-Type": "text/html" });
                                res.end(data);
                            }
                        });
                    }
                    else {
                        console.log("User found!");
                        fs.readFile("HomePage.html", function(err, data) {
                            if (err) {
                                res.writeHead(500, { "Content-Type": "text/html" });
                                res.end("<html><head><title>Error</title></head><body><h1>There was an error, please try again.</h1><a href='https://localhost:8000'></html>");
                            }
                            else {
                                res.writeHead(200, { "Content-Type": "text/html" });
                                res.end(data);
                            }
                        });
                        
                    }
                });

            });
        });        
    }
    else {
        fs.readFile("Login.html", function(err, data) {
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
}).listen(8000);