import { motion } from 'framer-motion'
import { FaYinYang, FaRunning, FaRegClock } from 'react-icons/fa'
import { GiMeditation, GiHealthNormal } from 'react-icons/gi'
import { IoMdFitness } from 'react-icons/io'

const Services = () => {
  const services = [
    {
      icon: <FaYinYang />,
      title: "Hatha Yoga",
      description: "Traditional yoga practice focusing on physical postures and breathing techniques",
      duration: "60-90 mins"
    },
    {
      icon: <GiMeditation />,
      title: "Meditation Sessions",
      description: "Guided meditation to reduce stress and improve mental clarity",
      duration: "30-60 mins"
    },
    {
      icon: <IoMdFitness />,
      title: "Power Yoga",
      description: "Dynamic and fitness-based approach to yoga for strength and endurance",
      duration: "60 mins"
    },
    {
      icon: <FaRunning />,
      title: "Yoga for Athletes",
      description: "Specialized sessions to enhance athletic performance and prevent injuries",
      duration: "60 mins"
    },
    {
      icon: <GiHealthNormal />,
      title: "Therapeutic Yoga",
      description: "Personalized sessions to address specific health concerns and chronic conditions",
      duration: "60-90 mins"
    },
    {
      icon: <FaRegClock />,
      title: "Corporate Yoga",
      description: "On-site sessions for businesses to improve employee wellbeing and productivity",
      duration: "45-60 mins"
    }
  ]

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
    <section id="services" className="services">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h2>
      
      <motion.div 
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="duration">
              <FaRegClock />
              <span>{service.duration}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <style jsx>{`
        .services {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .service-card .icon {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        
        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary-dark);
        }
        
        .service-card p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .duration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .services-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Services