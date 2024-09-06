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
    <section id="founders" className="w-full py-20 bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl shadow-2xl">
      <h1 className="text-center text-lime-500 text-[30px] lg:text-[45px] font-ubuntu font-bold mb-12 tracking-wide">Meet the Founders</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-10">
        {foundersInfo.map((founder, index) => (
          <div 
            key={index} 
            data-aos="fade-up" 
            className="bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out text-center"
          >
            <img src={founder.image} alt={founder.name} className="rounded-full w-[250px] h-[250px] mx-auto border-4 border-lime-500 mb-6 transform hover:scale-110 transition-transform duration-300" />
            <h2 className="text-[28px] text-lime-500 font-ubuntu font-semibold mb-2">{founder.name}</h2>
            <p className="text-[20px] mb-4">{founder.role}</p>
            <p className="text-[16px] text-lime-400 mb-6 font-ubuntu">{founder.about}</p>
            <div className="flex justify-center items-center gap-6">
              <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-lime-500 text-[30px] hover:text-white transition-colors duration-300" />
              </a>
              <a href={founder.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-lime-500 text-[30px] hover:text-white transition-colors duration-300" />
              </a>
              <a href={founder.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-lime-500 text-[30px] hover:text-white transition-colors duration-300" />
              </a>
              <a href={founder.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-lime-500 text-[30px] hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheFounders;
