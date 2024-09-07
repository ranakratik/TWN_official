import React, { useState, useEffect } from 'react'
import contactimg from '../assets/contact.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, [])

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // State for form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs.send(
      'service_h6c5cxk',         // Replace with your service_id
      'template_wi03w0i',        // Replace with your template_id
      formData,                  // Send formData as the email content
      '5_Dj-uQs3Begj_qHD'          // Replace with your public_key
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true);  // Set the submission status to true to show confirmation
    }, (error) => {
      console.log('FAILED...', error);
    });

    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id='contact' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      
      <div data-aos="zoom-in" data-aos-delay="400" className='lg:w-[50%] w-full flex flex-col justify-center items-start gap-8 bg-black lg:p-16 p-8 rounded-3xl'>
        <h1 className='text-white text-[45px] font-semibold font-ubuntu'>Let's talk your project</h1>
        <form id='form-box' className='w-full bg-transparent flex flex-col justify-center items-center gap-4' onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu'
            placeholder='Enter your full name here'
            required
          />
          <div className='w-full flex justify-center items-start gap-4'>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your valid E-mail here'
              className='w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu'
              required
            />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder='Enter your mobile number here'
              className='w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu'
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu'
            placeholder='Enter your message'
            rows="4"
            required
          ></textarea>
          <button type="submit" className='bg-limegreen px-6 py-4 w-full rounded-md font-semibold text-md font-ubuntu'>
            Submit Now
          </button>
        </form>

        {/* Confirmation message */}
        {isSubmitted && <p className='text-limegreen mt-4'>Thank you! Your message has been sent successfully.</p>}
      </div>
      <div className='lg:w-[50% w-full]'>
        <img data-aos="zoom-in" data-aos-delay="200" src={contactimg} alt="contact img" />
      </div>
    </section>
  )
}

export default Contact;
