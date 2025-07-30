import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { GrYoga } from "react-icons/gr";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <footer className="footer">
      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="footer-about" variants={itemVariants}>
          <div className="logo">
            <GrYoga />
            <span>Padmapriya</span>
          </div>
          <p>
            Transform your life through yoga with personalized sessions designed 
            for your unique needs and goals.
          </p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </motion.div>

        <motion.div className="footer-links" variants={itemVariants}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div className="footer-services" variants={itemVariants}>
          <h3>Services</h3>
          <ul>
            <li>Hatha Yoga</li>
            <li>Meditation</li>
            <li>Power Yoga</li>
            <li>Yoga for Athletes</li>
            <li>Therapeutic Yoga</li>
            <li>Corporate Yoga</li>
          </ul>
        </motion.div>

        <motion.div className="footer-contact" variants={itemVariants}>
          <h3>Contact Info</h3>
          <div className="contact-item">
            <FaPhone />
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span>padmapriya.yoga@example.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>123 Yoga Street, Chennai, India</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Padmapriya Yoga. All Rights Reserved.</p>
        <p>Designed with ❤️ for your wellbeing</p>
      </div>

      <style jsx>{`
        .footer {
          background: var(--dark);
          color: white;
          padding: 4rem 10% 0;
        }
        
        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-about {
          margin-bottom: 2rem;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--primary-light);
        }
        
        .logo svg {
          font-size: 2.2rem;
        }
        
        .footer-about p {
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background: var(--primary);
          transform: translateY(-3px);
        }
        
        .footer-links h3,
        .footer-services h3,
        .footer-contact h3 {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: var(--primary-light);
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-links h3::after,
        .footer-services h3::after,
        .footer-contact h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background: var(--secondary);
        }
        
        .footer-links ul,
        .footer-services ul {
          list-style: none;
        }
        
        .footer-links li,
        .footer-services li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links a {
          color: #ccc;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
          color: var(--primary-light);
          padding-left: 5px;
        }
        
        .footer-services li {
          color: #ccc;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .footer-services li:hover {
          color: var(--primary-light);
          padding-left: 5px;
        }
        
        .footer-contact .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #ccc;
        }
        
        .footer-contact svg {
          color: var(--primary-light);
          font-size: 1.2rem;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
          margin-top: 3rem;
          text-align: center;
          color: #999;
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 5% 0;
          }
          
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-bottom {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer