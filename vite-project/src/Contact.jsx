import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
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
    <section id="contact" className="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="contact-info" variants={itemVariants}>
          <h3>Contact Information</h3>
          <p>Feel free to reach out for any inquiries or to schedule a session.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">
                <FaPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>padmapriya.yoga@example.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>123 Yoga Street, Chennai, India</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-icon">
              <FaPhone />
            </a>
            <a href="#" className="social-icon">
              <FaEnvelope />
            </a>
            <a href="#" className="social-icon">
              <FaMapMarkerAlt />
            </a>
          </div>
        </motion.div>
        
        <motion.form className="contact-form" variants={itemVariants}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          
          <div className="form-group">
            <input type="text" placeholder="Subject" />
          </div>
          
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="btn">Send Message</button>
        </motion.form>
      </motion.div>
      
      <style jsx>{`
        .contact {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .contact-info {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        
        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--primary-dark);
        }
        
        .contact-info p {
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .contact-details {
          margin-bottom: 2rem;
        }
        
        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .contact-item .icon {
          font-size: 1.2rem;
          color: var(--primary);
          margin-top: 0.2rem;
        }
        
        .contact-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: var(--dark);
        }
        
        .contact-item p {
          margin-bottom: 0;
          color: var(--gray);
          font-size: 0.9rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: var(--primary);
          color: white;
        }
        
        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid var(--light-gray);
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
        }
        
        .form-group textarea {
          resize: vertical;
        }
        
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact