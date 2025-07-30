import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Testimonials from './Testiminials'
import Contact from './Contact'
import Footer from './Footer'
import { motion, useScroll, useSpring } from 'framer-motion'

 function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

 useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="app">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar isMobile={isMobile} />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  )
 }

 export default App