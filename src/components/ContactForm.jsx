import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Handles input change event to update formData state.
   * @param {React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>} e Change event
   */
/******  986e2314-359a-4288-9e99-7658ec39167a  *******/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        ></textarea>
      </div>

      {submitStatus && (
        <div className={`p-4 rounded-lg ${
          submitStatus === 'success' 
            ? 'bg-green-50 text-green-700' 
            : 'bg-red-50 text-red-700'
        }`}>
          <div className="flex items-center gap-2">
            {submitStatus === 'success' ? (
              <>
                <CheckCircle size={20} />
                <span>Message sent successfully!</span>
              </>
            ) : (
              <>
                <XCircle size={20} />
                <span>Failed to send message. Please try again.</span>
              </>
            )}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors ${
          isSubmitting 
            ? 'opacity-75 cursor-not-allowed' 
            : 'hover:bg-indigo-700'
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;