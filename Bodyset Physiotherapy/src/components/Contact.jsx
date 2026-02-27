import '../styles/Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container reveal">
        <div className="contact__grid">
          {/* Left Column */}
          <div className="contact__left">
            <span className="contact__label">
              <span className="contact__label-icon"><i className="fa-solid fa-leaf"></i></span>
              Contact Us
            </span>
            <h2 className="section-heading">
              We Just One Message Away From Helping You Heal
            </h2>
            <p className="contact__text">
              Ready to take control of your recovery? Our expert physiotherapy 
              team is here to answer your questions, understand your needs, and 
              guide you a personalized path to healing you&apos;re managing chronic.
            </p>

            {/* Schedule Table */}
            <div className="contact__schedule">
              <div className="contact__schedule-header">
                <span className="contact__schedule-heading">Day</span>
                <span className="contact__schedule-heading">Schedule</span>
              </div>
              <div className="contact__schedule-row">
                <span>Monday - Friday</span>
                <span>08:00 AM - 04:00 PM</span>
              </div>
              <div className="contact__schedule-row">
                <span>Saturday</span>
                <span>08:00 AM - 03:00 PM</span>
              </div>
              <div className="contact__schedule-row">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="contact__right">
            <div className="contact__form-card">
              <h3 className="contact__form-title">Book an Appointment</h3>
              <p className="contact__form-subtitle">
                Take the first step towards a pain-free &amp; healthier life. Whether 
                you need physiotherapy, chiropractic care, or a personalized.
              </p>
              <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label className="contact__form-label">Full Name</label>
                    <input type="text" placeholder="Full Name" className="contact__input" />
                  </div>
                  <div className="contact__form-group">
                    <label className="contact__form-label">Email Address</label>
                    <input type="email" placeholder="Email Address" className="contact__input" />
                  </div>
                </div>
                <div className="contact__form-group">
                  <label className="contact__form-label">Service Type</label>
                  <select className="contact__input contact__select" defaultValue="">
                    <option value="" disabled>Service Type</option>
                    <option value="sports">Sports Injury Rehabilitation</option>
                    <option value="surgery">Post-Surgery Recovery</option>
                    <option value="chronic">Chronic Pain Therapy</option>
                    <option value="geriatric">Geriatric Physiotherapy</option>
                  </select>
                </div>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label className="contact__form-label">Date</label>
                    <input type="date" className="contact__input" placeholder="Select Date" />
                  </div>
                  <div className="contact__form-group contact__form-group--time">
                    <label className="contact__form-label">Time</label>
                    <div className="contact__time-row">
                      <select className="contact__input contact__select contact__select--small" defaultValue="">
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
                      </select>
                      <select className="contact__input contact__select contact__select--small" defaultValue="">
                        <option value="" disabled>Select</option>
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="contact__contact-cards">
          <div className="contact__contact-card">
            <div className="contact__contact-icon-wrapper contact__contact-icon-wrapper--yellow">
              <span className="contact__contact-icon"><i className="fa-solid fa-envelope"></i></span>
            </div>
            <div className="contact__contact-info">
              <h4 className="contact__contact-title">Email Us Today</h4>
              <p className="contact__contact-detail">bodysetphysiotherapy@gmail.com</p>
            </div>
          </div>
          <div className="contact__contact-card">
            <div className="contact__contact-icon-wrapper contact__contact-icon-wrapper--yellow">
              <span className="contact__contact-icon"><i className="fa-solid fa-phone"></i></span>
            </div>
            <div className="contact__contact-info">
              <h4 className="contact__contact-title">Call Or Text</h4>
              <p className="contact__contact-detail">+ 233 54 576 8700</p>
            </div>
          </div>
          <div className="contact__contact-card">
            <div className="contact__contact-icon-wrapper contact__contact-icon-wrapper--yellow">
              <span className="contact__contact-icon"><i className="fa-solid fa-location-dot"></i></span>
            </div>
            <div className="contact__contact-info">
              <h4 className="contact__contact-title">Our Location</h4>
              <p className="contact__contact-detail">Savannah Road, Comm 25, Tema</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
