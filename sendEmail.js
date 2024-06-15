require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

let mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'mcaworksem2@gmail.com',
  subject: 'Nodemailer!',
  text: 'This is a email sent from a Node.js using nodemailer.',
  html: '<h1>Node Mailer!</h1><p>This is a email sent from a Node.js using <b>nodemailer</b>.</p>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
