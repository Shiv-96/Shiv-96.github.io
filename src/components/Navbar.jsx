import { useState } from 'react'
import { profile } from '../data.js'
const links = ['about', 'experience', 'skills', 'projects', 'contact']
const Svg = ({ children }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
)
const Sun = () => <Svg><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Svg>
const Moon = () => <Svg><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></Svg>
const Bars = () => <Svg><path d="M3 6h18M3 12h18M3 18h18" /></Svg>
const Close = () => <Svg><path d="M6 6l12 12M18 6L6 18" /></Svg>

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
        <button className="icon" onClick={toggle} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
        <button className="icon burger" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <Close /> : <Bars />}
        </button>
      </div>
    </header>
  )
}
