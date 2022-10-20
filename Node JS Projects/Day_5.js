var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'cjallcroft@hotmail.com',
        pass: 'Marauders29?'
    }
});

var mailOptions = {
    from: 'cjallcroft@hotmail.com',
    to: 'cal@mcflusion.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Hi Connor!</h1><p>Its work connor!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    }else {
        console.log('Email sent: ' + info.response);    
    }
});
