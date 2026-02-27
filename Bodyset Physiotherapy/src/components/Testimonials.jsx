import { useState, useRef, useEffect } from 'react'
import '../styles/Testimonials.css'

const Testimonials = () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const testimonials = [
    {
      text: "I had been living with chronic neck & shoulder pain for years. I tried everything medications, massages, even injections — but nothing gave me lasting relief. When I found this clinic, I was honestly skeptical. But from the very first session, I felt something different.",
      name: 'Sheldon Jackson',
      role: 'Chronic Back Pain',
      image: 'https://images.unsplash.com/photo-1702677852950-c25314af0149?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5,
    },
    {
      text: "After my knee surgery, I was worried I'd never run again. The team at Bodyset created a recovery plan that had me back on track in just 3 months. Their expertise and dedication are truly remarkable.",
      name: 'Amanda Thompson',
      role: 'Marathon Runner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
    },
    {
      text: "The geriatric physiotherapy program has been life-changing for my mother. She's more mobile, confident, and independent than she's been in years. Thank you, Bodyset!",
      name: 'Patricia Williams',
      role: 'Retired Teacher',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
      rating: 5,
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
      const scrollAmount = container.clientWidth

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container section-container reveal">
        
        <div className="testimonials__header">
          <span className="testimonials__label">
            <span className="testimonials__label-icon"><i className="fa-solid fa-leaf"></i></span>
            Testimonials
          </span>
          <h2 className="section-heading section-heading--center">
            What Our Patients Say
          </h2>
        </div>

        <div 
          className="testimonials__track" 
          ref={scrollRef}
          onScroll={checkScrollState}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonials__card" key={index}>
              <div className="testimonials__card-image-wrapper">
                <img
                  src={testimonial.image.replace('w=200', 'w=600')}
                  alt={testimonial.name}
                  className="testimonials__card-image"
                />
              </div>
              
              <div className="testimonials__card-content">
                <div className="testimonials__stars-wrapper">
                  <div className="testimonials__stars">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <i className="fa-solid fa-star testimonials__star" key={i}></i>
                    ))}
                  </div>
                  <i className="fa-solid fa-quote-right testimonials__quote-icon"></i>
                </div>
                
                <p className="testimonials__text">"{testimonial.text}"</p>
                
                <div className="testimonials__author-row">
                  <div className="testimonials__author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonials__author-thumb"
                    />
                    <div className="testimonials__author-info">
                      <h4 className="testimonials__author-name">{testimonial.name}</h4>
                      <p className="testimonials__author-role">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="testimonials__nav">
                    <button 
                      className={`testimonials__nav-btn ${canScrollLeft ? 'testimonials__nav-btn--active' : ''}`}
                      onClick={() => scroll('left')}
                      disabled={!canScrollLeft}
                      aria-label="Previous testimonial"
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button 
                      className={`testimonials__nav-btn ${canScrollRight ? 'testimonials__nav-btn--active' : ''}`}
                      onClick={() => scroll('right')}
                      disabled={!canScrollRight}
                      aria-label="Next testimonial"
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Testimonials
