import '../styles/Features.css'

const Features = () => {
  const bulletPoints = [
    'Restoring Movement',
    'Rebuilding Lives',
    "We Don't Just Treat Injuries",
  ]

  const handleClick = (e) => {
    e.preventDefault()
    const target = document.getElementById('about')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="features" id="features">
      <div className="features__container section-container">
        <div className="features__grid">
          {/* Left Column - Text */}
          <div className="features__text-col">
            <span className="features__label">
              <span className="features__label-icon">✓</span>
              About Us
            </span>
            <h2 className="section-heading">
              Science-Back Treatment Personalized Recovery Plans Results That Last
            </h2>
            <p className="features__description">
              At our clinic, believe recovery is more than just physical it&apos;s emotional, personal transformative. 
              That&apos;s why we take the time to understand your story, your pain, and your goals expert.
            </p>
            <div className="features__bullets">
              {bulletPoints.map((point, index) => (
                <div className="features__bullet" key={index}>
                  <span className="features__bullet-dot" />
                  <span className="features__bullet-text">{point}</span>
                </div>
              ))}
            </div>
            <a href="#about" className="btn-primary features__cta" onClick={handleClick}>
              Schedule A Session
            </a>
          </div>

          {/* Right Column - Images */}
          <div className="features__images-col">
            <div className="features__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                alt="Physiotherapist treating patient's back"
                className="features__image"
              />
            </div>
            <div className="features__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
                alt="Physical therapy rehabilitation session"
                className="features__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
