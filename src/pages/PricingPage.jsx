function PricingPage() {
  return (
    <section className="section page-section">
      <div className="section-heading">
        <span>Pricing</span>
        <h2>Simple options for every training goal.</h2>
      </div>

      <div className="grid three-up">
        <article className="info-card">
          <h3>Batting Cage Sessions</h3>
          <p>Flexible cage rentals for individual hitters, teammates, and families.</p>
        </article>
        <article className="info-card">
          <h3>Private Lessons</h3>
          <p>One-on-one instruction tailored to the athlete’s current level and goals.</p>
        </article>
        <article className="info-card">
          <h3>Team Training</h3>
          <p>Custom pricing available for team workouts, clinics, and multi-player sessions.</p>
        </article>
      </div>
    </section>
  )
}

export default PricingPage