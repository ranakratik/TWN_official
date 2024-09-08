import React, { useEffect } from 'react';
import about from '../assets/about.gif';
import { FaChevronCircleRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

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
        <h1 style={{ color: 'rgb(215, 69, 200)' }} className='font-ubuntu text-[19px] font-semibold'>
          WHO WE ARE
        </h1>
        <h1 style={{ color: 'rgb(49, 14, 89)' }} className='font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-ubuntu'>
          The Web Nursery - Your Strategic Brand Partner
        </h1>
        <p style={{ color: 'rgb(49, 14, 89)' }} className='font-ubuntu text-[18px]'>
          At The Web Nursery, we take the time to thoroughly assess your brand before accepting your project. Here’s what we do:
        </p>

        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='flex justify-center items-center gap-4 font-ubuntu' style={{ color: 'rgb(49, 14, 89)' }}>
            <FaChevronCircleRight 
              style={{ color: 'rgb(215, 69, 200)' }} // Arrow color set to match the palette
              className='size-6'
            />
            In-Depth Brand Research: We dive deep into understanding your brand's identity, values, and goals to ensure we're aligned from the start.
          </p>
          <p className='flex justify-center items-center gap-4 font-ubuntu' style={{ color: 'rgb(49, 14, 89)' }}>
            <FaChevronCircleRight 
              style={{ color: 'rgb(215, 69, 200)' }} 
              className='size-6' 
            />
            Competitive Analysis: We analyze your competitors to uncover their strengths and weaknesses, identifying opportunities where your brand can shine.
          </p>
          <p className='flex justify-center items-center gap-4 font-ubuntu' style={{ color: 'rgb(49, 14, 89)' }}>
            <FaChevronCircleRight 
              style={{ color: 'rgb(215, 69, 200)' }} 
              className='size-6' 
            />
            Idea Enhancement: We don’t just take your ideas as they are; we explore ways to refine and improve them, ensuring they’re positioned for success.
          </p>
          <p className='flex justify-center items-center gap-4 font-ubuntu' style={{ color: 'rgb(49, 14, 89)' }}>
            <FaChevronCircleRight 
              style={{ color: 'rgb(215, 69, 200)' }} 
              className='size-6' 
            />
            Strategic Positioning: We strategize on how your brand can outnumber and outperform competitors in the market, giving you the edge you need.
          </p>
        </div>

        {/* Link to scroll to the contact section */}
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <button 
            style={{ backgroundColor: 'rgb(215, 69, 200)', color: 'rgb(0, 0, 0)' }}
            className='px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu transition-all duration-300'
            onMouseEnter={e => {
              e.target.style.backgroundColor = 'rgb(0, 0, 0)';
              e.target.style.color = 'rgb(255, 255, 255)';
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = 'rgb(215, 69, 200)';
              e.target.style.color = 'rgb(0, 0, 0)';
            }}
          >
            Discover More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
