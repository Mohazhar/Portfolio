import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from '../ui/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactFormData } from '../../types';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        success: false,
        message: 'Please fill in all fields',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would add your EmailJS service ID, template ID, and public key
      // For this example, we'll just simulate a successful submission
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current!,
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        success: true,
        message: 'Your message has been sent successfully!',
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({
        success: false,
        message: 'Failed to send the message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's discuss how I can help."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send Me A Message
            </h3>
            
            {formStatus.message && (
              <div 
                className={`mb-6 p-4 rounded-lg ${
                  formStatus.success 
                    ? 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300'
                    : 'bg-error-100 text-error-800 dark:bg-error-900/30 dark:text-error-300'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-600 text-gray-900 dark:text-gray-100"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-600 text-gray-900 dark:text-gray-100"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-600 text-gray-900 dark:text-gray-100"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                    <Mail className="text-primary-500 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                      Email
                    </h4>
                    <a 
                      href="mailto:mohammedazharudeen.03@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      mohammedazharudeen.03@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                    <Phone className="text-primary-500 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                      Phone
                    </h4>
                    <a 
                      href="tel:+91 6381817157" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      +91 6381817157
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                    <MapPin className="text-primary-500 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Coimbatore - 641014, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Follow me on social media or check out my work on these platforms.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mohazhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-azharudeen-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;