import { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo-transparent.png'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (sidebarOpen) {
      document.documentElement.classList.add('no-scroll')
      document.body.classList.add('no-scroll')

      const preventDefault = (e) => {
        if (!e.target.closest('.navbar__sidebar')) {
          if (e.cancelable) e.preventDefault()
        }
      }

      document.addEventListener('touchmove', preventDefault, { passive: false })
      return () => {
        document.removeEventListener('touchmove', preventDefault)
        document.documentElement.classList.remove('no-scroll')
        document.body.classList.remove('no-scroll')
      }
    }
  }, [sidebarOpen])

  const toggleSidebar = () => setSidebarOpen(prev => !prev)
  const closeSidebar = () => setSidebarOpen(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    closeSidebar()
    
    setTimeout(() => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Blog', target: 'blog' },
    { label: 'Contact', target: 'contact' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="navbar__logo">
            <img src={logo} alt="Bodyset Logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">Bodyset</span>
          </a>

          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.target}>
                <a
                  href={`#${link.target}`}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.target)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-primary nav-bar-button"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Book Appointment
          </a>

          <button
            className={`navbar__hamburger ${sidebarOpen ? 'navbar__hamburger--active' : ''}`}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`navbar__overlay ${sidebarOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside className={`navbar__sidebar ${sidebarOpen ? 'navbar__sidebar--open' : ''}`}>
        <button className="navbar__sidebar-close" onClick={closeSidebar} aria-label="Close menu">
          ✕
        </button>
        <ul className="navbar__sidebar-links">
          {navLinks.map(link => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                className="navbar__sidebar-link"
                onClick={(e) => handleNavClick(e, link.target)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="navbar__sidebar-cta btn-primary"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Book Appointment
        </a>
      </aside>
    </>
  )
}

export default Navbar
