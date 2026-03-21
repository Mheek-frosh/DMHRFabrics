import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#111827] min-h-screen pt-32 pb-24 transition-colors duration-300">
      
      {/* Page Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-lust-dark dark:text-white mb-6">Get In Touch</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">We would love to hear from you. Whether you have a question about our fabrics, pricing, or shipping, our team is ready to answer all your questions.</p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-serif font-bold text-lust-dark dark:text-white mb-2">Our Store Info</h2>
            
            <div className="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-full text-lust-red">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-lust-dark dark:text-white mb-1">Visit Us</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">123 Fashion Avenue, Trade Fair Complex<br />Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-full text-lust-red">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-lust-dark dark:text-white mb-1">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">+1 403 389 8114<br />+234 800 000 0000</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-full text-lust-red">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-lust-dark dark:text-white mb-1">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">support@dmhrfabrics.com<br />wholesale@dmhrfabrics.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-full text-lust-red">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-lust-dark dark:text-white mb-1">Working Hours</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-serif font-bold text-lust-dark dark:text-white mb-8">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 p-6 rounded-lg text-center">
                <p className="font-bold text-lg mb-2">Message Sent Successfully!</p>
                <p>Thank you for reaching out. We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lust-red focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lust-red focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lust-red focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lust-red focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-lust-red hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
