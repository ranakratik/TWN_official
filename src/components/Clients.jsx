import React, { useEffect } from 'react';
import Slider from "react-slick";
import testimonialsImage from '../assets/testimonial.png';
import { FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      review: "The service exceeded my expectations. Highly recommended!",
      name: "Shahbaz Khan",
      post: ""
    },
    {
      review: "Amazing experience with great support throughout!",
      name: "Deepak Kumar",
      post: ""
    },
    {
      review: "A seamless process from start to finish. Great job!",
      name: "Palak Raj",
      post: ""
    },
    {
      review: "Professional and efficient service. Will definitely return!",
      name: "Nikhil Prajapati",
      post: ""
    },
  ];

  return (
    <section id='testimonials' className='relative py-20' style={{ backgroundColor: 'rgb(49, 14, 89)' }}>
      <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16'>
        {/* Background Image */}
        <div className='relative lg:w-[50%] w-full' data-aos="fade-right">
          <div className="absolute inset-0 bg-white opacity-10 rounded-full"></div>
          <img src={testimonialsImage} alt="testimonials" className='w-full rounded-lg shadow-lg relative z-10' />
        </div>

        {/* Testimonials Slider */}
        <div className='lg:w-[50%] w-full flex flex-col justify-center items-center text-center lg:text-left' data-aos="fade-left">
          <h2 className='text-[rgb(215, 69, 200)] text-2xl font-bold uppercase mb-4' style={{ color: 'rgb(215, 69, 200)' }}>Testimonials</h2>
          <h1 className='text-5xl font-semibold text-white mb-8'>What Our Clients Are Saying</h1>

          <div className='w-full mt-10'>
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className='bg-white shadow-xl p-8 rounded-xl mb-8'>
                  <div className='flex justify-center lg:justify-start mb-4'>
                    <FaQuoteLeft className='text-steelpink text-5xl' />
                  </div>
                  <p className='text-gray-600 text-lg mb-6'>" {item.review} "</p>
                  <div>
                    <h3 className='text-2xl font-semibold text-gray-900'>{item.name}</h3>
                    <p className='text-gray-500'>{item.post}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
