import { skills, tools } from '../data.js'
export default function Skills() {
  return (
    <section id="skills" className="wrap section">
      <h2>Skills and tools</h2>
      <div className="skill-cols">
        {skills.map((s) => (
          <div key={s.group}>
            <h3>{s.group}</h3>
            <div className="chips big">{s.items.map((i) => <span key={i}>{i}</span>)}</div>
          </div>
        ))}
      </div>
      <h3 className="sub">Tools I use daily</h3>
      <ul className="tools">
        {tools.map(([name, img]) => (
          <li key={name}>
            <img src={'/Pictures/' + img} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}
