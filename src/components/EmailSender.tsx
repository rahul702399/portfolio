import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface EmailSenderProps {
  darkMode: boolean;
}

const EmailSender: React.FC<EmailSenderProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    to: 'rahulsingodiya9829@gmail.com',
    subject: 'Portfolio Contact',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setStatusMessage('✅ Email sent successfully!');
        setFormData({ ...formData, message: '' });
      } else {
        setStatus('error');
        setStatusMessage('❌ Failed to send email. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('❌ Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="email-sender" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Email Automation Demo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Test the email automation functionality directly from this portfolio
          </p>
        </div>

        <div className={`max-w-2xl mx-auto rounded-2xl border p-8 ${
          darkMode 
            ? 'bg-gray-800/50 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white">
              <Mail className="h-8 w-8" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                To Email
              </label>
              <input
                type="email"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500'
                }`}
                placeholder="Enter recipient email"
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500'
                }`}
                placeholder="Enter email subject"
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500'
                }`}
                placeholder="Enter your message here..."
                required
              />
            </div>

            {/* Status Message */}
            {status !== 'idle' && (
              <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                status === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {status === 'success' ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
                <span className="text-sm font-medium">{statusMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full font-medium transition-all duration-300 hover:from-green-500 hover:to-emerald-600 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Send Email</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
            <h4 className={`font-medium mb-2 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              🔧 Technical Details
            </h4>
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              This demo uses Node.js with Nodemailer to send emails via Gmail SMTP. 
              The backend handles email authentication and delivery using your Gmail App Password.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSender; 