import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { IoIosMailOpen } from 'react-icons/io';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <section className='w-full bg-[rgb(49,14,89)] grid lg:grid-cols-3 grid-cols-1 justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10'>
        {/* Call to Action */}
        <div className='flex flex-col justify-center items-start gap-10'>
          <h1 className='text-[rgb(215,69,200)] font-semibold font-ubuntu text-[40px] leading-[50px]'>
            Let's Start Working together, get in touch!
          </h1>
          <Link to='contact' smooth={true} offset={-100}>
            <button className='bg-[rgb(215,69,200)] px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu text-black hover:bg-white hover:text-black transition-all duration-300'>
              Get Started Now
            </button>
          </Link>
        </div>

        {/* Contact Information */}
        <div className='flex flex-col justify-center items-start gap-10' id='contact'>
          <h1 className='text-[rgb(215,69,200)] text-2xl font-ubuntu font-semibold'>Contact Information</h1>
          <div className='flex flex-col justify-center items-start gap-4'>
            <p className='flex justify-center items-center gap-3'>
              <IoIosMailOpen className='text-white size-8' />
              <a
                href='mailto:info@thewebnursery.com'
                className='text-[16px] font-ubuntu text-white hover:underline'
              >
                info@thewebnursery.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-[rgb(215,69,200)] text-xl font-ubuntu font-semibold'>Quick Links</h2>
            <div className='flex flex-col gap-2'>
              <Link to='about' smooth={true} offset={-100} className='text-white text-[16px] font-ubuntu hover:text-white transition-all duration-300 cursor-pointer'>
                About Us
              </Link>
              <Link to='founders' smooth={true} offset={-100} className='text-white text-[16px] font-ubuntu hover:text-white transition-all duration-300 cursor-pointer'>
                Our Founders
              </Link>
              <Link to='services' smooth={true} offset={-100} className='text-white text-[16px] font-ubuntu hover:text-white transition-all duration-300 cursor-pointer'>
                Our Services
              </Link>
              <Link to='testimonials' smooth={true} offset={-100} className='text-white text-[16px] font-ubuntu hover:text-white transition-all duration-300 cursor-pointer'>
                Testimonials
              </Link>
              <Link to='contact' smooth={true} offset={-100} className='text-white text-[16px] font-ubuntu hover:text-white transition-all duration-300 cursor-pointer'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className='flex flex-col justify-center items-start gap-6'>
          <h1 className='text-[rgb(215,69,200)] text-2xl font-ubuntu font-semibold'>Subscribe to Newsletter</h1>
          <p className='text-[16px] font-ubuntu text-white'>
            Stay updated with our latest news and services. Enter your email to subscribe to our newsletter.
          </p>
          <div className='flex flex-col justify-center items-start gap-6 w-full'>
            <input type='email' placeholder='Enter your email' className='w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu text-white focus:outline-none focus:ring-2 focus:ring-limegreen' />
            <button className='bg-[rgb(215,69,200)] px-6 py-4 rounded-xl text-[17px] font-semibold font-ubuntu text-black hover:bg-white hover:text-black transition-all duration-300'>
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <section className='w-full bg-[rgb(49,14,89)] m-auto border-y-2 border-slate-600 grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-20 py-6'>
        <div>
          <h1 className='text-white text-[17px] font-ubuntu text-center'>
            &copy; 2024 The Web Nursery, All Rights Reserved
          </h1>
        </div>
        <div>
          <p className='text-white text-3xl text-center font-ubuntu font-bold'>
            The <span className='text-[rgb(215,69,200)] italic'>Web Nursery</span>
          </p>
        </div>
        <div className='flex lg:justify-end justify-center items-center gap-4'>
          <a href='https://www.facebook.com/profile.php?id=61564514108131&mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='text-white hover:text-white transition-all duration-300' size={24} />
          </a>
          <a href='https://x.com/thewebnursery?t=Hz-oY7WPhYV2rPhJSL2QJg&s=09' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='text-white hover:text-white transition-all duration-300' size={24} />
          </a>
          <a href='https://www.instagram.com/thewebnursery?igsh=bTBxOHN1NWhic2Y1' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-white hover:text-white transition-all duration-300' size={24} />
          </a>
          <a href='https://www.linkedin.com/company/the-web-nursery/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-white hover:text-white transition-all duration-300' size={24} />
          </a>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <div id='icon-box' className='bg-[rgb(215,69,200)] text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6 transition-all duration-300'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='w-[35px] h-[35px]' />
        </Link>
      </div>
    </>
  );
};

export default Footer;
