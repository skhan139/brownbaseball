function MembershipsPage() {
  return (
    <section className="section page-section memberships-page">
      <div className="section-heading">
        <span>Memberships</span>
        <h2>Train consistently with a plan that fits your schedule.</h2>
      </div>

      <div className="grid three-up">
        <article className="info-card">
          <h3>Travel Teams</h3>
          <p>Please contact us for multi-day use pricing</p>
        </article>
        <article className="info-card">
          <h3>Tunnel Rates</h3>
          <ul className="pricing-list">
            <li>
              <span>1 Hour</span>
              <span>$45</span>
            </li>
            <li>
              <span>1/2 Hour</span>
              <span>$30</span>
            </li>
          </ul>
          <br/>
          <h3>Team Rates</h3>
          <ul className="pricing-list">
            <li>
              <span>Please Contact Us For Inquiries</span>
            </li>
          </ul>
        </article>
        <article className="info-card">
          <h3>Memberships</h3>
          <ul className="pricing-list">
            <li>
              <span>Please Contact Us For Membership Information</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default MembershipsPage