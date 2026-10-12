import { experience } from '../data.js'
export default function Experience() {
  return (
    <section id="experience" className="wrap section">
      <h2>Experience</h2>
      <ol className="timeline">
        {experience.map((e, i) => (
          <li key={e.company} className={i === 0 ? 'current' : ''}>
            <p className="period">{e.period}</p>
            <h3>{e.title}</h3>
            <p className="company">{e.company}</p>
            <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <div className="chips">{e.tech.map((t) => <span key={t}>{t}</span>)}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
