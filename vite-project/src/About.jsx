import { motion } from 'framer-motion'
import { FaLeaf, FaHeartbeat, FaBrain } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="about" className="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="about-image" variants={itemVariants}>
          <div className="image-placeholder"></div>
        </motion.div>
        
        <motion.div className="about-content" variants={itemVariants}>
          <h3>Padmapriya - Certified Yoga Trainer</h3>
          <p>
            With over 10 years of experience in yoga instruction, I'm dedicated to helping 
            individuals achieve balance, strength, and peace through personalized yoga 
            practices tailored to their unique needs and goals.
          </p>
          <p>
            My approach combines traditional yoga techniques with modern understanding of 
            anatomy and physiology to create a holistic practice that benefits both body 
            and mind.
          </p>
          
          <div className="benefits">
            <motion.div 
              className="benefit-item"
              whileHover={{ y: -5 }}
            >
              <div className="icon">
                <FaLeaf />
              </div>
              <h4>Holistic Approach</h4>
              <p>Combining physical postures with breathing and meditation</p>
            </motion.div>
            
            <motion.div 
              className="benefit-item"
              whileHover={{ y: -5 }}
            >
              <div className="icon">
                <FaHeartbeat />
              </div>
              <h4>Physical Health</h4>
              <p>Improve flexibility, strength, and cardiovascular health</p>
            </motion.div>
            
            <motion.div 
              className="benefit-item"
              whileHover={{ y: -5 }}
            >
              <div className="icon">
                <FaBrain />
              </div>
              <h4>Mental Clarity</h4>
              <p>Reduce stress and enhance mental focus</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      <style jsx>{`
        .about {
          background: white;
        }
        
        .about-container {
          display: flex;
          align-items: center;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .about-image {
          flex: 1;
        }
        
        .image-placeholder {
          width: 100%;
          height: 500px;
          border-radius: 20px;
          background: var(--light-gray);
        }
        
        .about-content {
          flex: 1;
        }
        
        .about-content h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--primary-dark);
        }
        
        .about-content p {
          margin-bottom: 1rem;
          color: var(--gray);
          line-height: 1.6;
        }
        
        .benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .benefit-item {
          background: var(--light);
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .benefit-item .icon {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .benefit-item h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--dark);
        }
        
        .benefit-item p {
          font-size: 0.9rem;
          margin-bottom: 0;
        }
        
        @media (max-width: 1024px) {
          .about-container {
            flex-direction: column;
          }
          
          .image-placeholder {
            height: 400px;
          }
        }
        
        @media (max-width: 768px) {
          .benefits {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default About