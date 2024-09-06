import React, { useEffect } from 'react'
import { FaRocket, FaCode, FaPen, FaArrowRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const servicesinfo = [
  {
    icon: <FaRocket className='text-5xl text-lime-500' />,
    title: "Design",
    about: "Our design team creates futuristic, visually stunning, and user-friendly interfaces that capture your brand's essence. We innovate with AI-driven designs to give your brand a competitive edge.",
    label: "Get a free quote"
  },
  {
    icon: <FaCode className='text-5xl text-lime-500' />,
    title: "Development",
    about: "We build cutting-edge websites and applications with AI integration, blockchain capabilities, and scalable solutions that future-proof your digital presence for evolving technologies.",
    label: "Get a free quote"
  },
  {
    icon: <FaPen className='text-5xl text-lime-500' />,
    title: "Content",
    about: "We generate AI-enhanced content that resonates deeply with your audience, from SEO-optimized web copy to blog posts powered by predictive algorithms, ensuring maximum reach and engagement.",
    label: "Get a free quote"
  }
];

const Services = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({ 
        offset: 200,
        duration: 600,
        easing: 'ease-in-out',
    });
  }, []); 

  return (
    <section id='services' className='w-[90%] m-auto flex flex-col justify-center items-center gap-16 py-16 sm:px-20 bg-white'>
      {/* Updated title with color and font */}
      <h2 className='text-lime-500 text-[30px] lg:text-[45px] font-semibold mb-6 font-ubuntu tracking-wide'>
        Our Services
      </h2>

      <div data-aos="fade-up" data-aos-delay="300" className='bg-gradient-to-r from-gray-100 to-gray-200 p-5 lg:p-20 flex lg:flex-row flex-col justify-center gap-20 rounded-3xl shadow-lg'>
        {
          servicesinfo.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-start gap-6 hover:scale-105 transform transition-transform duration-300'>
              <div className='text-lime-500'>
                {item.icon}
              </div>
              <h1 className='text-[28px] text-lime-500 font-semibold font-ubuntu'>{item.title}</h1>
              <p className='font-ubuntu text-[18px] text-slate-700'>{item.about}</p>
              <button className='text-lime-500 font-ubuntu font-semibold text-[18px] flex justify-center items-center gap-3 hover:text-lime-600'>
                {item.label} <FaArrowRight className='text-lime-500' />
              </button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services;
