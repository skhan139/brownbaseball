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
            Use this page for calls, email, or booking requests. You can replace this placeholder
            contact information with your real business details later.
          </p>
          <ul className="contact-list">
            <li>Email: brownbaseballmb@gmail.com</li>
            <li>Phone: (843) 295-0010</li>
            <li>Location: 209 Horsetail Moss CT, Myrtle Beach, SC 29588</li>
            <li>Hours: 3pm - 10pm, Monday - Friday, 9am-10pm, Saturday - Sunday </li>
            <li>Service Area: Youth through professional athletes</li>
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