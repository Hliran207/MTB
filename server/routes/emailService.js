const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: 'MTB1998@outlook.co.il',
    pass: 'Lucas123'
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

const sendMail = async (parentEmail, childName) => {
  try {
    const subject = "התחברות ילד לאתר";
    const text = `הילד ${childName} התחבר לאתר`;
    console.log("Preparing email...");
    console.log("From:", "MTB1998@outlook.co.il");
    console.log("To:", parentEmail);
    console.log("Subject:", subject);
    console.log("Text:", text);

    await transporter.sendMail({
      from: "MTB1998@outlook.co.il",
      to: parentEmail,
      subject,
      text,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendMail;