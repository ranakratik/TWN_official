import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // Navbar items
  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About Us', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Testimonials', path: 'testimonials' },
  ];

  return (
    <nav style={{ backgroundColor: 'rgb(49, 14, 89)' }} className='w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
      
      <h1 className='md:text-4xl text-3xl font-bold font-ubuntu'>
      <span style={{ color: 'rgb(255, 255, 255)' }} className='italic'>The </span><span className='italic text-steelpink'>Web Nursery</span>
      </h1>

      {/* Desktop Menu */}
      <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className='uppercase font-semibold cursor-pointer p-3 rounded-lg transition-all duration-300 font-ubuntu text-[15px]'
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
            style={{ color: 'rgb(255, 255, 255)' }}
            activeStyle={{
              backgroundColor: 'rgb(215, 69, 200)',
              color: 'rgb(0, 0, 0)',
              padding: '12px 24px'
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = 'rgb(215, 69, 200)';
              e.target.style.color = 'rgb(0, 0, 0)';
              e.target.style.padding = '12px 24px';
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'rgb(255, 255, 255)';
              e.target.style.padding = '12px 16px';
            }}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* CTA Button */}
      <button>
        <Link
          to='contact'
          spy={true}
          smooth={true}
          offset={-100} 
          duration={500}
          className='font-ubuntu font-bold transform transition-transform duration-300 cursor-pointer md:flex hidden'
          style={{
            backgroundColor: 'rgb(215, 69, 200)',
            color: 'rgb(0, 0, 0)',
            padding: '12px 24px',
            borderRadius: '9999px'
          }}
          onMouseEnter={e => {
            e.target.style.backgroundColor = 'rgb(255, 255, 255)';
            e.target.style.color = 'rgb(0, 0, 0)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.target.style.backgroundColor = 'rgb(215, 69, 200)';
            e.target.style.color = 'rgb(0, 0, 0)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Contact Us
        </Link>
      </button>

      {/* Mobile menu toggle button */}
      <div className='flex justify-center items-center lg:hidden mt-3' onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className='text-white text-3xl cursor-pointer' />
        ) : (
          <FaBars className='text-white text-3xl cursor-pointer' />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full h-fit p-4 absolute top-[72px] left-0`}
        style={{ backgroundColor: 'rgb(49, 14, 89)' }}
        onClick={closeMenu}
      >
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className='uppercase font-semibold cursor-pointer p-3 rounded-lg w-full text-center transition-all duration-300'
              to={path}
              offset={-100}
              smooth={true}
              style={{ color: 'rgb(255, 255, 255)' }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = 'rgb(215, 69, 200)';
                e.target.style.color = 'rgb(0, 0, 0)';
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'rgb(255, 255, 255)';
              }}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
