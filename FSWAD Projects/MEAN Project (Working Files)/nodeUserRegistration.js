var http = require('http');

http.createServer(function (req, res) {
    
    var body = "";

    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function (req) {
        
        var postData = body;

        eval('var userLogin=' + postData);
        
        var Mongo = require('mongodb').MongoClient;

        var url = "mongodb+srv://C_Allcroft29:-@calmongodb.qbyvrif.mongodb.net/?retryWrites=true&w=majority";

        Mongo.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("PlumPicks");
    
            var user = {username: userLogin.userName, password: userLogin.password, firstName: userLogin.firstName, lastName: userLogin.lastName, birthDate: userLogin.birthDate, email: userLogin.email, phoneNumber: userLogin.phoneNumber};

            dbo.collection("Users").insertOne(user, function(err, res) {
                if (err) throw err;
                console.log("1 User Inserted!");
                db.close();
            });
        });

        res.writeHead(200);
        res.end();
    });
}).listen(3000);
