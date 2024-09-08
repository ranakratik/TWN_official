import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import kratikPic from '../assets/kratik.jpg'; // Replace with actual image paths
import prakharPic from '../assets/prakhar.jpg'; // Replace with actual image paths

const foundersInfo = [
  {
    name: "Kratik Rana",
    role: "Co-Founder",
    about: "Kratik brings a unique combination of expertise in Operations, Technology, and Leadership to The Web Nursery. His visionary approach helps in delivering seamless digital solutions while ensuring operational excellence and client satisfaction.",
    image: kratikPic,
    social: {
      linkedin: "https://www.linkedin.com/in/kratik-rana-1738a51b1/",
      twitter: "https://x.com/RanaKratik",
      github: "https://github.com/ranakratik",
      instagram: "https://www.instagram.com/thekratikrana?igsh=MWZidmc4NWpmZHNjZQ=="
    }
  },
  {
    name: "Prakhar Asthana",
    role: "Co-Founder",
    about: "With deep expertise in Marketing, Technology, and Client Handling, Prakhar shapes The Web Nursery's innovative approach to digital strategy. His focus on client needs and technology ensures project success and long-term growth.",
    image: prakharPic,
    social: {
      linkedin: "https://www.linkedin.com/in/prakhar-asthana-18o09/",
      twitter: "https://x.com/prakhar437",
      github: "https://github.com/Prakhar437",
      instagram: "https://www.instagram.com/og_asthana/"
    }
  }
];

const MeetTheFounders = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <section id="founders" className="w-full py-20 bg-white text-black rounded-3xl ">
      <h1 className="text-center" style={{ color: 'rgb(215, 69, 200)' }}>
        <span className="text-[19px] lg:text-[50px] font-ubuntu font-semibold mb-12 tracking-wide">Meet the Founders</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-10">
        {foundersInfo.map((founder, index) => (
          <div 
            key={index} 
            data-aos="fade-up" 
            className="bg-slate-100 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out text-center"
          >
            <img 
              src={founder.image} 
              alt={founder.name} 
              className="rounded-full w-[250px] h-[250px] mx-auto border-4 border-steelpink mb-6 transform hover:scale-110 transition-transform duration-300"
            />
            <h2 style={{ color: 'rgb(215, 69, 200)' }} className="text-[28px] font-ubuntu font-semibold mb-2">
              {founder.name}
            </h2>
            <p className="text-[20px]">{founder.role}</p>
            <p style={{ color: 'rgb(0, 0, 0)' }} className="text-[16px] mb-6 font-ubuntu">
              {founder.about}
            </p>
            <div className="flex justify-center items-center gap-6">
              <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin 
                  style={{ color: 'rgb(215, 69, 200)' }}
                  className="text-[30px] hover:text-black transition-colors duration-300" 
                />
              </a>
              <a href={founder.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter 
                  style={{ color: 'rgb(215, 69, 200)' }}
                  className="text-[30px] hover:text-black transition-colors duration-300" 
                />
              </a>
              <a href={founder.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub 
                  style={{ color: 'rgb(215, 69, 200)' }}
                  className="text-[30px] hover:text-black transition-colors duration-300" 
                />
              </a>
              <a href={founder.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram 
                  style={{ color: 'rgb(215, 69, 200)' }}
                  className="text-[30px] hover:text-black transition-colors duration-300" 
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheFounders;
