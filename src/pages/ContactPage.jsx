function ContactPage() {
  return (
    <section className="section page-section contact-page">
      <div className="section-heading">
        <span>Contact</span>
        <h2>Reach out to Brown Baseball today.</h2>
      </div>

      <div className="contact-panel">
        <div>
          <p className="section-copy">
            Use this page for calls, email, private lessons, team rentals, or facility rentals
          </p>
          <ul className="contact-list">
            <li>Email: brownbaseballmb@gmail.com</li>
            <li>Phone: (843) 295-0010</li>
            <li>Location: 209 Horsetail Moss CT, Myrtle Beach, SC 29588</li>
            <li>Hours: 9am - 10pm, Monday - Sunday </li>
            <li>Service Area: Youth through professional athletes</li>
            <li>
              Follow us on Instagram{' '}
              <a href="https://www.instagram.com/brownbaseballmb" target="_blank" rel="noreferrer">
                @brownbaseballmb
              </a>
            </li>
            <li>
              Follow us on Facebook{' '}
              <a
                href="https://www.facebook.com/people/Brown-Baseball/61589580863225/?mibextid=wwXIfr&rdid=I4saq5WYUWjSW61u&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EGmXMbRds%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noreferrer"
              >
                Brown Baseball
              </a>
            </li>
          </ul>
        </div>
        <a className="primary-btn" href="mailto:brownbaseballmb@gmail.com">
          Email Us
        </a>
      </div>
    </section>
  )
}

export default ContactPage