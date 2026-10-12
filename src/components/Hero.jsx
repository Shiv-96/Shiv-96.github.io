import { useEffect, useState } from 'react'
import { profile } from '../data.js'

function useTyping(words) {
  const [t, setT] = useState('')
  const [del, setDel] = useState(false)
  const [i, setI] = useState(0)
  useEffect(() => {
    const w = words[i % words.length]
    const id = setTimeout(() => {
      if (!del) { t === w ? setDel(true) : setT(w.slice(0, t.length + 1)) }
      else if (t === '') { setDel(false); setI(i + 1) }
      else setT(t.slice(0, -1))
    }, !del && t === w ? 1400 : del ? 35 : 75)
    return () => clearTimeout(id)
  }, [t, del, i, words])
  return t
}

export default function Hero() {
  const role = useTyping(profile.roles)
  return (
    <section id="hero" className="hero wrap">
      <div className="hero-text">
        <p className="hello">Hi, I'm</p>
        <h1>Shiv Kumar</h1>
        <p className="role" aria-live="off">I'm a <span>{role}</span><i className="caret" /></p>
        <p className="lead">I build Spring Boot backends, AI agent pipelines and data migrations. 1.5+ years in industry, currently at Cotrafix Technologies.</p>
        <div className="cta">
          <a className="btn" href="#projects">See my projects</a>
          <a className="btn ghost" href={profile.resume} target="_blank" rel="noreferrer">Download resume</a>
        </div>
      </div>
      <figure className="photo">
        <img src="/Pictures/shiv_kumar.jpg" alt="Shiv Kumar" onError={(e) => (e.currentTarget.style.display = 'none')} />
        <figcaption>SK</figcaption>
      </figure>
    </section>
  )
}
