import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import unique GIFs for each service
import webDevelopmentGif from '../assets/webdev.gif';
import uiUxDesignGif from '../assets/uiux.gif';
import webDesignGif from '../assets/designdev.gif';
import hostingServicesGif from '../assets/hosting.gif';
import wordpressShopifyGif from '../assets/wordpress.gif';
import businessCommunicationGif from '../assets/contentdev.gif';

const servicesinfo = [
  {
    icon: <img src={webDevelopmentGif} alt="Web Development GIF" className='w-[280px] h-[200px]' />,
    title: "Web Development",
    about: "We build dynamic, responsive websites tailored to your brand, ensuring fast load times, secure hosting, and seamless domain management for startups and businesses."
  },
  {
    icon: <img src={uiUxDesignGif} alt="UI/UX Design GIF" className='w-[260px] h-[200px]' />,
    title: "UI/UX Design",
    about: "Our design team crafts intuitive and user-centric interfaces that elevate user engagement, enhancing the overall experience with a focus on accessibility and modern design trends."
  },
  {
    icon: <img src={webDesignGif} alt="Web Design GIF" className='w-[260px] h-[200px]' />,
    title: "Web Design",
    about: "Creating visually stunning, mobile-responsive websites with smooth navigation to ensure a flawless user experience across all devices, capturing attention and driving conversions."
  },
  {
    icon: <img src={hostingServicesGif} alt="Hosting Services GIF" className='w-[260px] h-[200px]' />,
    title: "Hosting Services",
    about: "Offering robust hosting solutions with maximum uptime, advanced security features, and scalable options, making sure your business stays online and performs efficiently."
  },
  {
    icon: <img src={wordpressShopifyGif} alt="WordPress & Shopify GIF" className='w-[260px] h-[200px]' />,
    title: "WordPress & Shopify",
    about: "Tailoring WordPress, Wix, and Shopify platforms to build custom, scalable websites that align with your brand identity and business goals, ensuring easy management and functionality."
  },
  {
    icon: <img src={businessCommunicationGif} alt="Business Communication GIF" className='w-[260px] h-[200px]' />,
    title: "Brand Communication",
    about: "Providing comprehensive communication solutions, including business letters, brochures, newsletters, reports, case studies, and event magazines, designed to captivate and engage your audience."
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
      <h2 className='text-lime-500 text-[30px] lg:text-[45px] font-ubuntu mb-6 font-semibold tracking-wide text-center'>
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
              width: '300px',
              height: '300px',
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
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
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
                  background: 'linear-gradient(135deg, rgba(173,216,230,1) 0%, rgba(240,255,255,1) 100%)',
                  color: 'black',
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
