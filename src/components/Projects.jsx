import { useState } from 'react'
import { projects } from '../data.js'
const tabs = [['all', 'All'], ['backend', 'Backend'], ['frontend', 'Frontend']]
export default function Projects() {
  const [f, setF] = useState('all')
  const list = projects.filter((p) => f === 'all' || p.type === f)
  return (
    <section id="projects" className="wrap section">
      <h2>Projects</h2>
      <div className="tabs" role="tablist">
        {tabs.map(([k, l]) => (
          <button key={k} role="tab" aria-selected={f === k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{l}</button>
        ))}
      </div>
      <div className="cards">
        {list.map((p) => (
          <article key={p.title} className="card">
            <img src={'/Pictures/' + p.img} alt={p.title + ' screenshot'} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <div className="card-body">
              <h3>{p.title}{p.note && <small>{p.note}</small>}</h3>
              <p>{p.desc}</p>
              <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="links">
                {p.links.map(([l, u]) => <a key={l} href={u} target="_blank" rel="noreferrer">{l}</a>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
