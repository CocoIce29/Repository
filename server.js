var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="text" name="username" placeholder="Username"><br>');
    res.write('<input type="text" name="password" placeholder="Password"><br>');
    res.write('<input type="submit"');
    res.write('</form>');
    return res.end();
}).listen(8080);