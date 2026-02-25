import '../styles/CTA.css'

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="cta__bg-overlay"></div>
      <div className="cta__container section-container">
        <div className="cta__content">
          <h2 className="section-heading cta__heading">
            Ready To Take The First Step<br/>Toward A Pain-Free Life?
          </h2>
          <p className="cta__text">
            Don&apos;t let pain or limited movement hold you back any longer. Our expert
            physiotherapists are here to help you recover, strengthen.
          </p>
          <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
            <div className="cta__input-wrapper">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="cta__input"
                required
              />
              <button type="submit" className="btn-primary cta__button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
