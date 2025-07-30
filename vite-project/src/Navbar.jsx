import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Navbar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const mobileNavVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    exit: { 
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">Padmapriya</a>
        
        {isMobile ? (
          <>
            <button className="menu-btn" onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu />
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  className="mobile-nav"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={mobileNavVariants}
                >
                  <button className="close-btn" onClick={() => setIsOpen(false)}>
                    <AiOutlineClose />
                  </button>
                  
                  <ul className="mobile-nav-links">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                      >
                        <a href={link.href}>{link.name}</a>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="social-icons">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 10%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 999;
          transition: all 0.3s ease;
        }
        
        .scrolled {
          background: white;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          padding: 1rem 10%;
        }
        
        .nav-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        
        .nav-links a {
          color: var(--dark);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: var(--primary);
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .menu-btn, .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--dark);
          cursor: pointer;
        }
        
        .mobile-nav {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 70%;
          max-width: 300px;
          background: white;
          box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        
        .close-btn {
          align-self: flex-end;
          margin-bottom: 2rem;
        }
        
        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: auto;
        }
        
        .mobile-nav-links a {
          color: var(--dark);
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 500;
        }
        
        .social-icons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }
        
        .social-icons a {
          color: var(--primary);
          font-size: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .navbar {
            padding: 1rem 5%;
          }
          
          .scrolled {
            padding: 0.8rem 5%;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar