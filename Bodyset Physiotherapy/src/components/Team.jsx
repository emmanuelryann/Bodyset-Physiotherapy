import { useState, useRef, useEffect } from 'react'
import '../styles/Team.css'

const Team = () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const members = [
    {
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
      name: 'Dr. James Hall',
      role: 'Physio Specialist',
    },
    {
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
      name: 'Dr. Faisal Ahmed',
      role: 'Founder - CEO',
    },
    {
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
      name: 'Dr. Corina McCoy',
      role: 'Health Physiotherapist',
    },
    {
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
      name: 'Dr. David Elson',
      role: 'Performance Therapist',
    },
    {
      image: 'https://images.unsplash.com/photo-1559839734-dcd25dcbc547?w=400&q=80',
      name: 'Dr. Lisa Wong',
      role: 'Clinical Expert',
    },
  ]

  const checkScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth)
    }
  }

  useEffect(() => {
    checkScrollState()
    window.addEventListener('resize', checkScrollState)
    return () => window.removeEventListener('resize', checkScrollState)
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
    <section className="team" id="team">
      <div className="team__container section-container">
        
        <div className="team__header-row">
          <div className="team__header-text">
            <span className="team__label">
              <span className="team__label-icon"><i className="fa-solid fa-leaf"></i></span>
              Our Team
            </span>
            <h2 className="section-heading team__heading">
              Your Healing, Powered<br/>By People Who Care
            </h2>
          </div>
          
          <div className="team__nav">
            <button 
              className={`team__nav-btn ${canScrollLeft ? 'team__nav-btn--active' : ''}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous team member"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              className={`team__nav-btn ${canScrollRight ? 'team__nav-btn--active' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next team member"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div 
          className="team__track" 
          ref={scrollRef}
          onScroll={checkScrollState}
        >
          {members.map((member, index) => (
            <div className="team__card" key={index}>
              <div className="team__card-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team__card-image"
                />
              </div>
              <div className="team__card-info">
                <h3 className="team__card-name">{member.name}</h3>
                <p className="team__card-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Team
