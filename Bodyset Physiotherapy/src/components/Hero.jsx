import '../styles/Hero.css'

const Hero = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__overlay" />

      {/* Decorative elements */}
      <div className="hero__decoration hero__decoration--left">
        <svg viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__spine-svg">
          <path d="M60 0 C60 30, 40 50, 60 80 C80 110, 40 130, 60 160 C80 190, 40 210, 60 240 C80 270, 60 290, 60 300" stroke="rgba(27, 54, 93, 0.3)" strokeWidth="2" fill="none"/>
          <circle cx="60" cy="40" r="12" fill="rgba(27, 54, 93, 0.15)" stroke="rgba(27, 54, 93, 0.3)" strokeWidth="1.5"/>
          <circle cx="55" cy="80" r="10" fill="rgba(27, 54, 93, 0.12)" stroke="rgba(27, 54, 93, 0.25)" strokeWidth="1.5"/>
          <circle cx="65" cy="120" r="11" fill="rgba(27, 54, 93, 0.12)" stroke="rgba(27, 54, 93, 0.25)" strokeWidth="1.5"/>
          <circle cx="55" cy="160" r="10" fill="rgba(27, 54, 93, 0.1)" stroke="rgba(27, 54, 93, 0.2)" strokeWidth="1.5"/>
          <circle cx="65" cy="200" r="9" fill="rgba(27, 54, 93, 0.08)" stroke="rgba(27, 54, 93, 0.18)" strokeWidth="1.5"/>
          <circle cx="60" cy="240" r="8" fill="rgba(27, 54, 93, 0.06)" stroke="rgba(27, 54, 93, 0.15)" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="hero__decoration hero__decoration--right">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__hand-svg">
          <path d="M100 20 C60 40, 30 80, 40 130 C50 170, 80 190, 100 180 C120 190, 150 170, 160 130 C170 80, 140 40, 100 20Z" stroke="rgba(27, 54, 93, 0.2)" strokeWidth="1.5" fill="none"/>
          <path d="M80 60 C70 80, 65 110, 75 140" stroke="rgba(27, 54, 93, 0.15)" strokeWidth="1" fill="none"/>
          <path d="M120 60 C130 80, 135 110, 125 140" stroke="rgba(27, 54, 93, 0.15)" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="hero__content reveal">
        <span className="hero__label">
          <span className="hero__label-icon"><i className="fa-solid fa-leaf"></i></span>
          Feel Better, Move Freely, Live Fully
        </span>
        <h1 className="hero__heading">
          Reclaim Your Strength With<br />Expert Physiotherapy
        </h1>
        <div className="hero__actions">
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="hero__btn-secondary"
            onClick={(e) => handleClick(e, 'services')}
          >
            Schedule a Session
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
