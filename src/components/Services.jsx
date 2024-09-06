import React, { useEffect } from 'react'
import { FaRocket, FaCode, FaPen, FaArrowRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const servicesinfo = [
  {
    icon: <FaRocket className='text-4xl' />,
    title: "Design",
    about: "Our design team creates visually stunning and user-friendly interfaces that capture your brand's essence. We plant the seeds of a strong visual identity that grows your brand recognition and user engagement.",
    label: "Schedule Your Free Consultation"
  },
  {
    icon: <FaCode className='text-4xl' />,
    title: "Development",
    about: "We build robust, scalable websites and applications that serve as the strong roots of your digital presence. Our development solutions are tailored to support your business growth and adapt to evolving tech landscapes.",
    label: "Schedule Your Free Consultation"
  },
  {
    icon: <FaPen className='text-4xl' />,
    title: "Content",
    about: "We craft compelling narratives that resonate with your audience. Our content solutions range from SEO-optimized web copy to engaging blog posts, helping your brand voice bloom across all digital platforms.",
    label: "Schedule Your Free Consultation"
  }
  // Add more service items as needed
];

const Services = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({ 
        offset: 200,
        duration: 400,
        easing: 'ease-in-sine',
    });
  }, []); 

  return (
    <section id='services' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-10 sm:px-20'>
      <div data-aos="zoom-in" data-aos-delay="400" className='bg-black lg:p-20 p-10 flex lg:flex-row flex-col justify-center gap-20 rounded-3xl'>
        {
          servicesinfo.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-start gap-6'>
              <div className='text-limegreen'>
                {item.icon}
              </div>
              <h1 className='text-[26px] text-white font-semibold font-ubuntu'>{item.title}</h1>
              <p className='font-ubuntu text-[18px] text-slate-200'>{item.about}</p>
              <button className='text-limegreen font-ubuntu font-semibold text-[18px] flex justify-center items-center gap-3'>{item.label} <FaArrowRight /></button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services;
