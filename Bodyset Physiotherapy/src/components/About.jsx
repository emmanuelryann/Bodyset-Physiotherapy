import '../styles/About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container section-container">
        <div className="about__grid">
          {/* Left Column */}
          <div className="about__left">
            <span className="about__label">
              <span className="about__label-icon">✓</span>
              Contact Us
            </span>
            <h2 className="section-heading">
              We Just One Message Away From Helping You Heal
            </h2>
            <p className="about__text">
              Ready to take control of your recovery? Our expert physiotherapy 
              team is here to answer your questions, understand your needs, and 
              guide you a personalized path to healing you&apos;re managing chronic.
            </p>

            {/* Schedule Table */}
            <div className="about__schedule">
              <div className="about__schedule-header">
                <span className="about__schedule-heading">Day</span>
                <span className="about__schedule-heading">Schedule</span>
              </div>
              <div className="about__schedule-row">
                <span>Monday - Saturday</span>
                <span>08:00 AM - 07:00 PM</span>
              </div>
              <div className="about__schedule-row">
                <span>Sunday</span>
                <span>Close</span>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="about__right">
            <div className="about__form-card">
              <h3 className="about__form-title">Book An Appointment</h3>
              <p className="about__form-subtitle">
                Take the first step towards a pain-free &amp; healthier life. Whether 
                you need physiotherapy, chiropractic care, or a personalized.
              </p>
              <form className="about__form" onSubmit={(e) => e.preventDefault()}>
                <div className="about__form-row">
                  <div className="about__form-group">
                    <label className="about__form-label">Full Name</label>
                    <input type="text" placeholder="Full Name" className="about__input" />
                  </div>
                  <div className="about__form-group">
                    <label className="about__form-label">Email Address</label>
                    <input type="email" placeholder="Email Address" className="about__input" />
                  </div>
                </div>
                <div className="about__form-group">
                  <label className="about__form-label">Service Type</label>
                  <select className="about__input about__select" defaultValue="">
                    <option value="" disabled>Service Type</option>
                    <option value="sports">Sports Injury Rehabilitation</option>
                    <option value="surgery">Post-Surgery Recovery</option>
                    <option value="chronic">Chronic Pain Therapy</option>
                    <option value="geriatric">Geriatric Physiotherapy</option>
                  </select>
                </div>
                <div className="about__form-row">
                  <div className="about__form-group">
                    <label className="about__form-label">Date</label>
                    <input type="date" className="about__input" placeholder="Select Date" />
                  </div>
                  <div className="about__form-group about__form-group--time">
                    <label className="about__form-label">Time</label>
                    <div className="about__time-row">
                      <select className="about__input about__select about__select--small" defaultValue="">
                        <option value="" disabled>Select</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                      </select>
                      <select className="about__input about__select about__select--small" defaultValue="">
                        <option value="" disabled>Select</option>
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary about__submit">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="about__contact-cards">
          <div className="about__contact-card about__contact-card--dark">
            <div className="about__contact-icon-wrapper about__contact-icon-wrapper--yellow">
              <span className="about__contact-icon"><i className="fa-solid fa-envelope"></i></span>
            </div>
            <div className="about__contact-info">
              <h4 className="about__contact-title">Email Us Today</h4>
              <p className="about__contact-detail">info@physiotherapy.com</p>
            </div>
          </div>
          <div className="about__contact-card about__contact-card--green">
            <div className="about__contact-icon-wrapper about__contact-icon-wrapper--white">
              <span className="about__contact-icon"><i className="fa-solid fa-phone"></i></span>
            </div>
            <div className="about__contact-info">
              <h4 className="about__contact-title about__contact-title--white">Call Or Text</h4>
              <p className="about__contact-detail about__contact-detail--white">123-456-7890</p>
            </div>
          </div>
          <div className="about__contact-card about__contact-card--dark">
            <div className="about__contact-icon-wrapper about__contact-icon-wrapper--yellow">
              <span className="about__contact-icon"><i className="fa-solid fa-location-dot"></i></span>
            </div>
            <div className="about__contact-info">
              <h4 className="about__contact-title">Our Location</h4>
              <p className="about__contact-detail">3274 Doe Meadow Drive,<br/>Annapolis Junction, MD 20701</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
