import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    content: "Padmapriya's yoga sessions transformed my life. As someone who sits at a desk all day, I had chronic back pain. After 3 months of sessions, not only is my pain gone, but I'm more flexible than I've ever been.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Marketing Executive",
    content: "The meditation sessions have helped me manage my stress levels tremendously. I sleep better and feel more focused at work. Padmapriya's guidance is gentle yet effective.",
    rating: 5
  },
  {
    name: "Arjun Menon",
    role: "Athlete",
    content: "The yoga for athletes program has improved my performance and recovery time. I've set personal bests in my competitions since starting with Padmapriya.",
    rating: 5
  }
]

const Testimonials = () => {
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
    <section id="testimonials" className="testimonials">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Client Testimonials
      </motion.h2>
      
      <motion.div 
        className="testimonials-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="testimonial-card"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <p className="content">{testimonial.content}</p>
            <div className="client-info">
              <h4>{testimonial.name}</h4>
              <p className="role">{testimonial.role}</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <style jsx>{`
        .testimonials {
          background: white;
        }
        
        .testimonials-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .testimonial-card {
          background: var(--light);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          position: relative;
        }
        
        .quote-icon {
          font-size: 2rem;
          color: var(--primary-light);
          opacity: 0.3;
          position: absolute;
          top: 20px;
          left: 20px;
        }
        
        .content {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        .client-info {
          border-top: 1px solid var(--light-gray);
          padding-top: 1rem;
        }
        
        .client-info h4 {
          font-size: 1.2rem;
          color: var(--dark);
          margin-bottom: 0.3rem;
        }
        
        .role {
          color: var(--gray);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .rating {
          color: var(--secondary);
          font-size: 1rem;
        }
        
        @media (max-width: 768px) {
          .testimonials-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials