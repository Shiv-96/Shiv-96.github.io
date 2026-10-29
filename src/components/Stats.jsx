/**
 * Stats
 * GitHub activity cards. The SVG files are generated during the deploy workflow
 * (.github/workflows/deploy.yml) into public/stats/, one per theme, so the page
 * does not depend on the shared public stats server. A card that is missing is hidden.
 */
const hideOnError = (e) => (e.currentTarget.style.display = 'none')

export default function Stats({ theme }) {
  const t = theme === 'light' ? 'light' : 'dark'
  return (
    <section className="wrap section">
      <h2>GitHub activity</h2>
      <div className="stats">
        <img loading="lazy" alt="GitHub stats" src={`/stats/stats-${t}.svg`} onError={hideOnError} />
        <img loading="lazy" alt="Top languages" src={`/stats/top-langs-${t}.svg`} onError={hideOnError} />
      </div>
    </section>
  )
}
