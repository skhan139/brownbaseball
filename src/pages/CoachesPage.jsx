function CoachesPage() {
  return (
    <section className="section page-section">
      <div className="coaches-top">
        <div className="section-heading">
          <span>Train With The Pros</span>
          <h2>Instruction built around fundamentals, confidence, and performance.</h2>
          <br/> <br/>
          <p className="coaches-note">Other Instructors to be announced soon!</p>
        </div>

        <figure className="coach-feature coach-feature-top">
          <img
            className="coach-photo"
            src={`${import.meta.env.BASE_URL}images/brown.jpg`}
            alt="Graham Brown"
          />
          <figcaption>Graham Brown, Minnesota Twins/CCU Baseball Alum</figcaption>
        </figure>
      </div>

      <div className="grid three-up">
        <article className="info-card">
          <h3>Graham Brown</h3>
          <p>
            Graham Brown is a current member of the Minnesota Twins organization and brings elite
            experience from every level of the game. He began his college career at WVU Potomac
            State, where he earned NJCAA Division I Third-Team All-American and All-Region honors.
            He then starred at Coastal Carolina, collecting 196 hits, 57 doubles, 36 home runs,
            and 176 RBI in 177 games. Brown also played professionally with the Evansville Otters,
            where he totaled 103 hits, 26 doubles, 12 home runs, and 53 RBI during a standout season.
          </p>
        </article>
        <article className="info-card">
          <h3>Craig Rotruck</h3>
          <img
            className="coach-card-photo"
            src={`${import.meta.env.BASE_URL}images/craig.jpg`}
            alt="Craig Rotruck"
          />
          <p>
            Craig Rotruck is a championship-level coach with decades of collegiate experience. As
            head baseball coach at WVU Potomac State, he posted a 113-26 record, won an NJCAA DII
            National Championship, and was named 1995 NJCAA DII Coach of the Year. He later led
            Potomac State softball to a 142-31 record, four Region 20 titles, and three NJCAA DII
            World Series appearances. Craig is the only head coach in NJCAA history to take a men's athletic team and women's athletic team to a Junior College World Series. As a player, Rotruck was an All American Catcher from the Frostburg State University Baseball Team. In 2009 Rotruck was the 160th inductee into the Frostburg State Atheltic Hall Of Fame
          </p>
        </article>
        <article className="info-card">
          <h3>Jack Billings</h3>
          <img
            className="coach-card-photo"
            src={`${import.meta.env.BASE_URL}images/billings.jpg`}
            alt="Jack Billings"
          />
          <p>
            Jack Billings brings strong two-way college experience to the facility. Before Coastal
            Carolina, he starred at Rowan Gloucester as an NJCAA Division III All-American, going
            6-0 with a 1.90 ERA and 74 strikeouts in 47.1 innings in 2021 while also hitting .373
            with five home runs. He later pitched for Coastal Carolina, appearing in 14 games,
            recording two saves, and earning a win in his first career start for the Chanticleers.
          </p>
        </article>
      </div>
    </section>
  )
}

export default CoachesPage