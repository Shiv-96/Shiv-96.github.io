import { useState } from 'react'
import { profile } from '../data.js'
const links = ['about', 'experience', 'skills', 'projects', 'contact']
export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a href="#hero" className="logo">Shiv Kumar</a>
      <nav className={open ? 'open' : ''}>
        {links.map((l) => (
          <a key={l} href={'#' + l} onClick={() => setOpen(false)}>{l[0].toUpperCase() + l.slice(1)}</a>
        ))}
        <a className="btn sm" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
      </nav>
      <div className="nav-actions">
        <button className="icon" onClick={toggle} aria-label="Switch theme">{theme === 'dark' ? 'Light' : 'Dark'}</button>
        <button className="icon burger" onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>Menu</button>
      </div>
    </header>
  )
}
