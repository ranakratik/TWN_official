// src/pages/CampusAmbassador.js

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaChevronCircleRight } from 'react-icons/fa';

const CampusAmbassador = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine'
    });
  }, []);

  return (
    <section className='w-[90%] m-auto flex flex-col justify-between items-center gap-28 py-20'>
      <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-start gap-4'>
        <h1 style={{ color: 'rgb(215, 69, 200)' }} className='font-ubuntu text-[19px] font-semibold'>
          JOIN US AS A CAMPUS AMBASSADOR
        </h1>
        <h1 style={{ color: 'rgb(49, 14, 89)' }} className='font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-ubuntu'>
          Become a Brand Ambassador for The Web Nursery
        </h1>
        <p style={{ color: 'rgb(49, 14, 89)' }} className='font-ubuntu text-[18px]'>
          As a Campus Ambassador, you will represent our brand in your university and help us reach a wider audience while gaining valuable experience.
        </p>

        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='flex justify-center items-center gap-4 font-ubuntu' style={{ color: 'rgb(49, 14, 89)' }}>
            <FaChevronCircleRight 
              style={{ color: 'rgb(215, 69, 200)' }} 
              className='size-6' 
            />
            Gain Marketing & Leadership Experience
          </p>
          <p className='flex justify-center items-center gap-4 font-ubuntu' style={{ color: 'rgb(49, 14, 89)' }}>
            <FaChevronCircleRight 
              style={{ color: 'rgb(215, 69, 200)' }} 
              className='size-6' 
            />
            Network with Professionals
          </p>
          <p className='flex justify-center items-center gap-4 font-ubuntu' style={{ color: 'rgb(49, 14, 89)' }}>
            <FaChevronCircleRight 
              style={{ color: 'rgb(215, 69, 200)' }} 
              className='size-6' 
            />
            Certificate of Excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default CampusAmbassador;
