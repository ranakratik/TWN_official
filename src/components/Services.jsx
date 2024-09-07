import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import GIFs
import designGif from '../assets/designdev.gif';
import developmentGif from '../assets/webdev.gif';
import contentGif from '../assets/contentdev.gif';

const servicesinfo = [
  {
    icon: <img src={designGif} alt="Design GIF" className='w-[280px] h-[200px]' />,
    title: "Design",
    about: "Our design team creates futuristic, visually stunning, and user-friendly interfaces that capture your brand's essence. We innovate with AI-driven designs to give your brand a competitive edge.",
  },
  {
    icon: <img src={developmentGif} alt="Development GIF" className='w-[260px] h-[200px]' />,
    title: "Development",
    about: "We build cutting-edge websites and applications with AI integration, blockchain capabilities, and scalable solutions that future-proof your digital presence for evolving technologies.",
  },
  {
    icon: <img src={contentGif} alt="Content GIF" className='w-[260px] h-[200px]' />,
    title: "Content",
    about: "We generate AI-enhanced content that resonates deeply with your audience, from SEO-optimized web copy to blog posts powered by predictive algorithms, ensuring maximum reach and engagement.",
  }
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({ 
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id='services' className='w-[90%] m-auto flex flex-col justify-center items-center gap-4 py-16 sm:px-20 bg-white'>
      <h2 className='text-lime-500 text-[30px] lg:text-[45px] font-ubuntu mb-6 font-semibold tracking-wide'>
        Our Services
      </h2>

      {/* Flexbox layout with space between columns */}
      <div className='flex flex-wrap justify-center gap-10'>
        {servicesinfo.map((item, index) => (
          <div 
            key={index} 
            className='flip-card' 
            style={{
              backgroundColor: 'transparent',
              width: '300px', // Set a width for the card
              height: '300px', // Set a height for the card
              perspective: '1000px',
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className='flip-card-inner' 
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transition: 'transform 0.8s ease',
                transformStyle: 'preserve-3d',
                transform: hoveredCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front Side */}
              <div 
                className='flip-card-front'
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '15px',
                  backgroundColor: '#fff',
                  color: 'black',
                  flexDirection: 'column',
                  padding: '10px',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Adding shadow for better visibility
                }}
              >
                <div className='text-lime-500'>
                  {item.icon}
                </div>
                <h1 className='text-[28px] text-lime-500 font-semibold font-ubuntu mt-4'>
                  {item.title}
                </h1>
              </div>

              {/* Back Side */}
              <div 
                className='flip-card-back'
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '15px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  transform: 'rotateY(180deg)',
                  flexDirection: 'column',
                  padding: '10px',
                }}
              >
                <p className='font-ubuntu text-[18px] text-center'>
                  {item.about}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
