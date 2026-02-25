import { useState, useEffect, useRef, useCallback } from 'react'
import '../styles/Services.css'

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef(null)

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
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734314?w=600&q=80',
      title: 'Geriatric Physiotherapy',
      description: 'Gentle and effective treatments tailored for older adults to maintain mobility, balance, and independence.',
    },
    {
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
      title: 'Workplace Ergonomics',
      description: 'Prevent injuries and improve comfort with our comprehensive workplace posture and ergonomic assessments.',
    },
  ]

  const totalDots = services.length

  const scrollTo = useCallback((index) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cardWidth = container.firstElementChild?.offsetWidth || 0
    const gap = parseFloat(getComputedStyle(container).gap) || 0
    
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth'
    })
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % totalDots
        scrollTo(nextIndex)
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, totalDots, scrollTo])

  // Update active index based on scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const scrollPosition = container.scrollLeft
    const cardWidth = container.firstElementChild?.offsetWidth || 0
    const gap = parseFloat(getComputedStyle(container).gap) || 0
    const itemWidth = cardWidth + gap
    
    // Calculate which item is mostly in view
    const newIndex = Math.round(scrollPosition / itemWidth)
    if (newIndex >= 0 && newIndex < totalDots && newIndex !== activeIndex) {
      setActiveIndex(newIndex)
    }
  }

  return (
    <section className="services" id="services">
      <div className="services__container section-container">
        <div className="services__header">
          <span className="services__label">
            <span className="services__label-icon"><i className="fa-solid fa-leaf"></i></span>
            Our Services
          </span>
          <h2 className="section-heading">
            Therapy That Adapts To You, Not<br />The Other Way Around
          </h2>
        </div>

        <div 
          className="services__carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            className="services__track" 
            ref={scrollRef}
            onScroll={handleScroll}
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

        <div className="services__dots">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button
              key={idx}
              className={`services__dot ${idx === activeIndex ? 'services__dot--active' : ''}`}
              onClick={() => {
                setIsPaused(true)
                scrollTo(idx)
                // Resume after a delay
                setTimeout(() => setIsPaused(false), 5000)
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
