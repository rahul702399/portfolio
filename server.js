const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'rahulsaini70238@gmail.com',
    pass: 'bjpkyxnabkugzaut' // App Password
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, message } = req.body;
    
    const mailOptions = {
      from: 'rahulsaini70238@gmail.com',
      to: to || 'rahulsingodiya9829@gmail.com',
      subject: subject || 'Portfolio Contact',
      text: message || 'Test email from portfolio'
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
}); 