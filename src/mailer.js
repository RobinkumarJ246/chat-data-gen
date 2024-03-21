const nodemailer = require('nodemailer');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'innovatexcel.team@gmail.com', // Your email address
    pass: 'bbyw zbva omrb tche', // Your email password or app-specific password if using Gmail
  },
});

// Function to send custom email
const sendCustomEmail = (toEmail, subject, text) => {
  // Email options
  const mailOptions = {
    from: 'innovatexcel.team@gmail.com', // Sender address
    to: toEmail, // Recipient address
    subject: subject, // Subject line
    html:htmlContent, // Plain text body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

const toEmail = 'robin246j@gmail.com';
const subject = 'Account creation success';
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to ChatDataGen</title>
</head>
<body style="font-family: Arial, sans-serif;">

    <!-- Header -->
    <header style="background-color: #f0f0f0; padding: 20px;">
        <h1 style="margin: 0; color: #333;">Welcome to ChatDataGen</h1>
    </header>

    <!-- Content -->
    <section style="padding: 20px;">
        <p>Hello there,</p>
        <p>Welcome to ChatDataGen! We're excited to have you on board.</p>
        <p>This webapp is created to help data scientists and AI model engineers to craft conversational datasets using simpler steps.</p>
        <p>The platform is still in beta development and can have bugs and errors, so please let us know your valuable feedback and suggestions that will greatly improve our solution.</p>
        <p>We thank you once again for joining is in early stage</p>
    </section>

    <!-- Footer -->
    <footer style="background-color: #f0f0f0; padding: 20px; text-align: center;">
        <p style="margin: 0;">Best regards,<br> Innovatexcel team</p>
    </footer>

</body>
</html>
`;

sendCustomEmail(toEmail, subject, htmlContent);