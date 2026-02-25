import '../styles/Process.css'

const Process = () => {
  const steps = [
    {
      icon: 'fa-dumbbell',
      title: '1. Personalized Treatment Planning',
      description: "No two bodies are the same that's why we create a customized treatment plan just for you dealing",
      isActive: true,
    },
    {
      icon: 'fa-hand-holding-medical',
      title: '2. Hands - On Therapy and Targeted',
      description: 'Our expert therapist combine manual therapy with guided exercises to promote healing.',
      isActive: false,
    },
    {
      icon: 'fa-laptop-medical',
      title: '3. Progress Tracking & Adjustments',
      description: 'We continually monitor your progress and adjust your treatment as needed. Feedback is essential.',
      isActive: false,
    },
    {
      icon: 'fa-circle-check',
      title: '4. Recovery Long-Term Wellness',
      description: "Once you're feeling better, we help you maintain results through strategies, ongoing support.",
      isActive: false,
    },
  ]

  return (
    <section className="process" id="process">
      <div className="process__container section-container">
        <div className="process__grid">
          <div className="process__image-col">
            <div className="process__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Therapist guiding patient through recovery"
                className="process__image"
              />
            </div>
          </div>

          <div className="process__content-col">
            <span className="process__label">
              <span className="process__label-icon"><i className="fa-solid fa-leaf"></i></span>
              How We Work
            </span>
            <h2 className="section-heading process__heading">
              From Assessment Recovery<br />We Guide Every Step
            </h2>
            
            <div className="process__steps">
              {steps.map((step, index) => (
                <div 
                  className={`process__step ${step.isActive ? 'process__step--active' : ''}`} 
                  key={index}
                >
                  <div className="process__step-icon-wrapper">
                    <i className={`fa-solid ${step.icon} process__step-icon`}></i>
                  </div>
                  <div className="process__step-info">
                    <h3 className="process__step-title">{step.title}</h3>
                    <p className="process__step-text">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
