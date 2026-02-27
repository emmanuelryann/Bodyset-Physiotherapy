import { useState, useEffect, useRef } from 'react'
import '../styles/Services.css'

const Services = () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
      title: 'Sports Injury Rehabilitation',
      description: 'Tailored specifically for athletes active individuals, this program targets sports injuries to restore function.',
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      title: 'Post-Surgical Rehabilitation',
      description: 'Regain strength & mobility after surgery with our customized post-operative care plans.',
    },
    {
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80',
      title: 'Pain Management Therapy',
      description: 'Chronic pain doesn\'t have to define your life. Through a combination of physical therapy, we can help.',
    },
    {
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80',
      title: 'Neurological Rehabilitation',
      description: 'Designed for patients with neurological conditions, maximizing independence and movement.',
    },
    {
      image: 'https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Geriatric Physiotherapy',
      description: 'Gentle and effective treatments tailored for older adults to maintain mobility, balance, and independence.',
    },
    {
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
      title: 'Workplace Ergonomics',
      description: 'Prevent injuries and improve comfort with our comprehensive workplace posture and ergonomic assessments.',
    },
  ]

  const checkScrollState = () => {
    if (!scrollRef.current) return
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    const newCanScrollLeft = scrollLeft > 2
    const newCanScrollRight = Math.ceil(scrollLeft + clientWidth) < (scrollWidth - 2)

    setCanScrollLeft(newCanScrollLeft)
    setCanScrollRight(newCanScrollRight)
  }

  useEffect(() => {
    checkScrollState()
    window.addEventListener('resize', checkScrollState)
    return () => {
      window.removeEventListener('resize', checkScrollState)
    }
  }, []) 

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const cardWidth = container.firstElementChild?.offsetWidth || 0
      const gap = parseFloat(getComputedStyle(container).gap) || 0
      const scrollAmount = cardWidth + gap

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="services" id="services">
      <div className="services__container section-container reveal">
        <div className="services__header-row">
          <div className="services__header-text">
            <span className="services__label">
              <span className="services__label-icon"><i className="fa-solid fa-leaf"></i></span>
              Our Services
            </span>
            <h2 className="section-heading services__heading">
              Therapy That Adapts To You, Not The Other Way Around
            </h2>
          </div>
          
          <div className="services__nav">
            <button 
              className={`services__nav-btn ${canScrollLeft ? 'services__nav-btn--active' : ''}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous service"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              className={`services__nav-btn ${canScrollRight ? 'services__nav-btn--active' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next service"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="services__carousel-wrapper">
          <div 
            className="services__track" 
            ref={scrollRef}
            onScroll={checkScrollState}
          >
            {services.map((service, index) => (
              <div className="services__card" key={index}>
                <div className="services__card-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="services__card-image"
                  />
                </div>
                <div className="services__card-content">
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-text">{service.description}</p>
                  <a href="#about" className="services__card-link">
                    Read More <i className="fa-solid fa-arrow-up-right-from-square services__card-link-icon"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Services
