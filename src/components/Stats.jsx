const u = 'Shiv-96'
export default function Stats() {
  return (
    <section className="wrap section">
      <h2>GitHub activity</h2>
      <div className="stats">
        <img loading="lazy" alt="GitHub stats" src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&hide_border=true&theme=transparent`} />
        <img loading="lazy" alt="Top languages" src={`https://github-readme-stats.vercel.app/api/top-langs?username=${u}&layout=compact&hide_border=true&theme=transparent`} />
      </div>
    </section>
  )
}
