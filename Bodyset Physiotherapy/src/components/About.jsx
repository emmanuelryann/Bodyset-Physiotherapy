import '../styles/About.css'

const About = () => {
  const bulletPoints = [
    'Restoring Movement',
    'Rebuilding Lives',
    "We Don't Just Treat Injuries",
  ]

  const handleClick = (e) => {
    e.preventDefault()
    const target = document.getElementById('contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="about" id="about">
      <div className="about__container section-container reveal">
        <div className="about__grid">
          {/* Left Column - Text */}
          <div className="about__text-col">
            <span className="about__label">
              <span className="about__label-icon"><i className="fa-solid fa-leaf"></i></span>
              About Us
            </span>
            <h2 className="section-heading">
              Science-Back Treatment Personalized Recovery Plans Results That Last
            </h2>
            <p className="about__description">
              At our clinic, believe recovery is more than just physical it&apos;s emotional, personal transformative. 
              That&apos;s why we take the time to understand your story, your pain, and your goals expert.
            </p>
            <div className="about__bullets">
              {bulletPoints.map((point, index) => (
                <div className="about__bullet" key={index}>
                  <span className="about__bullet-dot" >✓</span>
                  <span className="about__bullet-text">{point}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary" onClick={handleClick}>
              Schedule A Session
            </a>
          </div>

          {/* Right Column - Images */}
          <div className="about__images-col">
            <div className="about__image-wrapper">
              <img
                src="https://images.pexels.com/photos/20860586/pexels-photo-20860586.jpeg"
                alt="Physiotherapist treating patient's back"
                className="about__image"
              />
            </div>
            <div className="about__image-wrapper">
              <img
                src="https://images.pexels.com/photos/4506106/pexels-photo-4506106.jpeg"
                alt="Physical therapy rehabilitation session"
                className="about__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
