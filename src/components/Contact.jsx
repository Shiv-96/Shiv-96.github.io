import { useState } from 'react'
import { profile } from '../data.js'
export default function Contact() {
  const [f, setF] = useState({ name: '', message: '' })
  const send = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`${f.message}\n\n- ${f.name}`)
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${body}`
  }
  return (
    <section id="contact" className="wrap section">
      <h2>Contact me</h2>
      <div className="contact-grid">
        <ul className="reach">
          <li><span>Email</span><a href={'mailto:' + profile.email}>{profile.email}</a></li>
          {profile.phones.map((p) => <li key={p}><span>Phone</span><a href={'tel:' + p.replace(/\s/g, '')}>{p}</a></li>)}
          <li><span>Location</span>{profile.location}</li>
          <li><span>Elsewhere</span><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> <a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
        </ul>
        <form onSubmit={send}>
          <label>Your name<input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
          <label>Message<textarea required rows="5" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></label>
          <button className="btn" type="submit">Open in my email app</button>
        </form>
      </div>
    </section>
  )
}
