// sendMail.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'muthukumaropen@gmail.com',
    pass: 'nbyertlrnhnwqyjr',
  },
});

function sendEmail() {
  const mailOptions = {
    from: 'muthukumaropen@gmail.com',
    to: 'poornaashavi@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
}

module.exports = sendEmail;
