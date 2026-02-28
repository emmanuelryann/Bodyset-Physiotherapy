import '../styles/Footer.css'
import logo from '../assets/logo-transparent.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container reveal">
        <div className="footer__grid">
          
          {/* Column 1: Brand & Socials */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <img src={logo} alt="Bodyset Logo" className="footer__logo-img" />
              <span className="footer__logo-text">Bodyset</span>
            </div>
            <p className="footer__tagline">
              We&apos;re team licensed physiotherapists dedicate to helping you move better, 
              feel stronger, live pain-free. Through personalized care, expert guidance, &amp; 
              proven techniques, support recovery.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="X (Twitter)">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Working Hours */}
          <div className="footer__col footer__col--hours">
            <h4 className="footer__col-title">Working Hours</h4>
            <div className="footer__hours-table">
              <div className="footer__hours-row">
                <span className="footer__hours-day">Mon-Fri</span>
                <span className="footer__hours-time">8:00 AM - 4:00 PM</span>
              </div>
              <div className="footer__hours-row">
                <span className="footer__hours-day">Saturday</span>
                <span className="footer__hours-time">8:00 AM - 3:00 PM</span>
              </div>
              <div className="footer__hours-row">
                <span className="footer__hours-day">Sunday</span>
                <span className="footer__hours-time footer__hours-time--closed">Full Day Closed</span>
              </div>
            </div>
          </div>

          {/* Column 3: Top Links */}
          <div className="footer__col footer__col--links">
            <h4 className="footer__col-title">Top Links</h4>
            <ul className="footer__nav">
              <li><a href="#hero" className="footer__link">Home</a></li>
              <li><a href="#contact" className="footer__link">About</a></li>
              <li><a href="#services" className="footer__link">Services</a></li>
              <li><a href="#testimonials" className="footer__link">Testimonials</a></li>
              <li><a href="#blog" className="footer__link">Blogs</a></li>
              <li><a href="#contact" className="footer__link">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact">
              <li className="footer__contact-item">
                <span className="footer__contact-icon"><i className="fa-solid fa-phone-volume"></i></span>
                <span>+233 54 576 8700</span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon"><i className="fa-solid fa-location-dot"></i></span>
                <span>Savannah road, Comm 25, Tema</span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon"><i className="fa-regular fa-envelope"></i></span>
                <span>bodysetphysiotherapy@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; Copyright {new Date().getFullYear()} Bodyset. All Rights Reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Terms and Conditions</a>
            <span className="footer__legal-divider">|</span>
            <a href="#" className="footer__legal-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
