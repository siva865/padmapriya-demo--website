import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import { IoMdFitness } from 'react-icons/io'
import { GrYoga } from "react-icons/gr";
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="home" className="hero">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <h1>Transform Your Life With Yoga</h1>
          <p className="subtitle">Personalized yoga sessions with Padmapriya to enhance your physical and mental wellbeing</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn">Book a Session</a>
            <a href="#about" className="btn secondary">Learn More</a>
          </div>
        </motion.div>
        
        <motion.div className="hero-image" variants={itemVariants}>
          <div className="image-placeholder"></div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown />
      </motion.div>
      
      <div className="floating-icons">
        <motion.div
          className="icon"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <GrYoga />
        </motion.div>
        <motion.div
          className="icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
        >
          <GiMeditation />
        </motion.div>
        <motion.div
          className="icon"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
        >
          <IoMdFitness />
        </motion.div>
      </div>
      
      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero-container {
          display: flex;
          align-items: center;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .hero-content {
          flex: 1;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary-dark);
          line-height: 1.2;
        }
        
        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: var(--gray);
          max-width: 600px;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
        }
        
        .btn.secondary {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }
        
        .btn.secondary:hover {
          background: var(--primary-light);
          color: white;
        }
        
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        
        .image-placeholder {
          width: 400px;
          height: 400px;
          border-radius: 20px;
          background: var(--primary-light);
          position: relative;
          overflow: hidden;
        }
        
        .scroll-down {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--primary);
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .floating-icons .icon {
          position: absolute;
          color: var(--primary-light);
          font-size: 2rem;
          opacity: 0.7;
        }
        
        .floating-icons .icon:nth-child(1) {
          top: 20%;
          left: 10%;
        }
        
        .floating-icons .icon:nth-child(2) {
          top: 70%;
          left: 15%;
        }
        
        .floating-icons .icon:nth-child(3) {
          top: 40%;
          right: 10%;
        }
        
        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }
          
          .cta-buttons {
            justify-content: center;
          }
          
          .hero-content h1 {
            font-size: 2.8rem;
          }
          
          .image-placeholder {
            width: 300px;
            height: 300px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero