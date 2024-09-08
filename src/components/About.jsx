import React, { useEffect } from 'react';
import about from '../assets/about.gif';
import { FaChevronCircleRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll'; // Import the Link from react-scroll

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine'
    });
  }, []);

  return (
    <section id='about' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      <div>
        <img data-aos="zoom-in" data-aos-delay="200" src={about} alt="" className='lg:w-[1000px] lg:h-[500]' />
      </div>
      <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-start gap-4'>
        <h1 className='text-lime-500 font-ubuntu text-[19px] font-semibold'>WHO WE ARE</h1>
        <h1 className='text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-ubuntu'>The Web Nursery - Your Strategic Brand Partner</h1>
        <p className='font-ubuntu text-[18px] text-slate-700'>At The Web Nursery, we take the time to thoroughly assess your brand before accepting your project. Here’s what we do:</p>

        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'>
            <FaChevronCircleRight className='text-limegreen size-6' />
            In-Depth Brand Research: We dive deep into understanding your brand's identity, values, and goals to ensure we're aligned from the start.
          </p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'>
            <FaChevronCircleRight className='text-limegreen size-6' />
            Competitive Analysis: We analyze your competitors to uncover their strengths and weaknesses, identifying opportunities where your brand can shine.
          </p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'>
            <FaChevronCircleRight className='text-limegreen size-6' />
            Idea Enhancement: We don’t just take your ideas as they are; we explore ways to refine and improve them, ensuring they’re positioned for success.
          </p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'>
            <FaChevronCircleRight className='text-limegreen size-6' />
            Strategic Positioning: We strategize on how your brand can outnumber and outperform competitors in the market, giving you the edge you need.
          </p>
        </div>

        {/* Link to scroll to the contact section */}
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <button className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white transition-all duration-300'>
            Discover More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
