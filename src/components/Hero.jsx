import React, { useEffect } from 'react'
import herobanner from '../assets/herobanner.png'
import clients from '../assets/clients.png'
import AOS from 'aos'
import'aos/dist/aos.css'

const Hero = () => {

    // Initialize AOS
  useEffect(() => {
    AOS.init({ 
        offset: 200,
        duration: 400,
        easing: 'ease-in-sine',
    });
  }, []);    
  return (
    <section id= 'hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
<div className='flex flex-col justify-center items-start gap-8'>
<h1 data-aos= "zoom-in" datatype-aos-delay="" className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[80px] font-ubuntu'>The Web Nursery</h1>
<h2 data-aos= "zoom-in" datatype-aos-delay="" className='text-black font-semibold lg:text-[50px] text-[65px] lg:leading-[50px] font-ubuntu'>Cultivating Digital Excellence</h2>
<p data-aos= "zoom-in" data-aos-delay= "400" className='font-ubuntu text-[20px] text-slate-700'>Your one-stop destination for web design, development, and content solutions.</p>
<button data-aos= "zoom-in" data-aos-delay= "600" className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white'>Get Started Now</button>
<div data-aos="zoom-in" data-aos-delay= "600" className='flex lg: flex-col justify-center lg:items-start gap-10'></div>
    <img src={clients} alt="" />
    <p className='font-ubuntu text-[20px] font-bold text-black'>Trusted by 5000+ Customer and Brands Worldwide</p>
</div>
<div>
    <img data-aos= "zoom-in" data-aos-delay= "1000" src={herobanner} className='lg:w-[750px] lg:h-[550px]' alt='' />

</div>
    </section>
  )
}

export default Hero
