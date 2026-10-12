import { profile } from '../data.js'
export default function About() {
  return (
    <section id="about" className="wrap section">
      <h2>About me</h2>
      <div className="about-grid">
        <p className="big">{profile.summary}</p>
        <dl className="facts">
          <div><dt>Experience</dt><dd>1.5+ years</dd></div>
          <div><dt>Companies</dt><dd>2</dd></div>
          <div><dt>Projects</dt><dd>6 built</dd></div>
          <div><dt>Based in</dt><dd>{profile.location}</dd></div>
        </dl>
      </div>
    </section>
  )
}
