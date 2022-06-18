let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service : 'gmail',
  auth    : {
    user  : 'youremail@gmail.com',
    pass  : "yourpassword"
  }
});

let mailOptions = {
  from    : 'youremail@gmail.com',
  to      : 'myfriend@yahoo.com',
  subject : 'test nodemailer-package',
  text    : 'Uhaha'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});