import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
      <About />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </>
  )
}

export default App
