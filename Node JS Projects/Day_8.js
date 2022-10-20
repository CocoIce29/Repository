// Form Creation

// var http = require('http');


// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="text" name="user_name" placeholder="Name"><br>');
//     res.write('<input type="number" name="user_age" placeholder="Age"><br>');
//     res.write('<input type="submit"');
//     res.write('</form>');
//     return res.end();
// }).listen(8080);

var http = require('http');

var formidable = require('formidable');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var name = fields.user_name;
            res.write('User Name - ' + name);
            res.end();
        });
    } 
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="text" name="user_name" placeholder="Name"><br>');
        res.write('<input type="number" name="user_age" placeholder="Age"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
    }).listen(8080);