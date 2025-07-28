const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { to, subject, message } = JSON.parse(event.body);

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'rahulsaini70238@gmail.com',
        pass: 'bjpkyxnabkugzaut' // App Password
      }
    });

    // Email options
    const mailOptions = {
      from: 'rahulsaini70238@gmail.com',
      to: to || 'rahulsingodiya9829@gmail.com',
      subject: subject || 'Portfolio Contact',
      text: message || 'Test email from portfolio'
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        messageId: info.messageId,
        message: 'Email sent successfully!'
      })
    };

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: error.message 
      })
    };
  }
}; 