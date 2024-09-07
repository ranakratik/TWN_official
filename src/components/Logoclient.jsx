import React, { useEffect } from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import client logos
import clientLogo1 from '../assets/clientLogo1.jpg';
import clientLogo2 from '../assets/clientLogo2.jpg';
import clientLogo3 from '../assets/clientLogo3.jpg';
import clientLogo4 from '../assets/clientLogo4.jpg';

const ClientLogos = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  const settings = {
    dots: false,  // Remove dots for navigation
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const clientLogos = [clientLogo1, clientLogo2, clientLogo3, clientLogo4];

  return (
    <section id='clients' className='bg-gray-100 py-16'>
      <div className='w-full max-w-6xl mx-auto flex flex-col items-center'>
        {/* Section Heading */}
        <h2 className='text-lime-600 text-3xl font-bold uppercase mb-12' data-aos="fade-up">Our Clients</h2>
        
        {/* Slider with Client Logos */}
        <Slider {...settings} className="w-full">
          {clientLogos.map((logo, index) => (
            <div key={index} className='flex justify-center items-center p-6'>
              <div className='bg-white shadow-lg rounded-lg p-4 flex items-center justify-center' style={{ width: '200px', height: '150px' }}>
                <img src={logo} alt={`Client ${index + 1}`} className='w-full h-full object-contain' />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientLogos;
