import { Link } from 'react-router-dom'

const offerings = [
  {
    title: 'Batting Cages',
    text: 'Build confidence with high-quality cages designed for focused reps, individual work, and team sessions.',
  },
  {
    title: 'Training Space',
    text: 'Develop strength, speed, and mechanics in a flexible training environment built for serious athletes.',
  },
  {
    title: 'Baseball Lessons',
    text: 'Work one-on-one or in small groups with instructors who help players sharpen every part of their game.',
  },
]

const audiences = [
  'Youth Players',
  'High School Athletes',
  'College Athletes',
  'Professional Baseball Players',
  'Softball Players',
]

function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Baseball & Softball Training Facility</span>
            <h1>Built for reps, growth, and game-day confidence.</h1>
            <p>
              Brown Baseball provides batting cages, training space, and lessons for youth,
              high school, college, and professional baseball and softball players in Myrtle Beach. Being only fifteen minutes from the Ripken Experience in Myrtle Beach, we are one of the top options for your collegiate team, travel team, or high school team.
            </p>
            <div className="hero-actions">
              <Link className="primary-btn" to="/pricing">
                View Pricing
              </Link>
              <Link className="secondary-btn" to="/coaches">
                Meet Our Coaches
              </Link>
            </div>
          </div>

          <figure className="hero-facility">
            <img
              src={`${import.meta.env.BASE_URL}images/indoor.JPG`}
              alt="Brown Baseball facility exterior"
            />
          </figure>
        </div>
      </header>

      <section className="section" id="about">
        <div className="section-heading">
          <span>About Brown Baseball</span>
          <h2>A facility built for development, repetition, and real progress.</h2>
        </div>
        <p className="section-copy">
          Whether players are working on fundamentals or preparing for the next level, Brown Baseball
          offers a focused environment where athletes can improve with purpose.
        </p>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <span>Services</span>
          <h2>Everything athletes need to train with intention.</h2>
        </div>
        <div className="grid three-up">
          {offerings.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="audience">
        <div>
          <span>Who We Serve</span>
          <h2>Training for the full baseball and softball community.</h2>
          <p className="section-copy">
            The facility is designed to support players at every stage, from first-time youth athletes
            to seasoned professionals.
          </p>
        </div>

        <div className="audience-list">
          {audiences.map((group) => (
            <div className="pill" key={group}>
              {group}
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-panel" id="contact">
        <div>
          <span>Get Started</span>
          <h2>Ready to train at Brown Baseball?</h2>
          <p>
            Reach out to schedule batting cage time, facility training, or private lessons for your athlete or team.
          </p>
        </div>
        <Link className="primary-btn" to="/contact">
          Contact Brown Baseball
        </Link>
      </section>
    </>
  )
}

export default HomePage