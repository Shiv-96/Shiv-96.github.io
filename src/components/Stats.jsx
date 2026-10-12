const u = 'Shiv-96'
const colors = {
  dark: 'title_color=ffb454&text_color=e8edf6&icon_color=ffb454&ring_color=ffb454&bg_color=00000000',
  light: 'title_color=1f4fd8&text_color=101a2e&icon_color=1f4fd8&ring_color=1f4fd8&bg_color=00000000',
}
export default function Stats({ theme }) {
  const c = colors[theme] || colors.dark
  return (
    <section className="wrap section">
      <h2>GitHub activity</h2>
      <div className="stats">
        <img loading="lazy" alt="GitHub stats" src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&hide_border=true&${c}`} />
        <img loading="lazy" alt="Top languages" src={`https://github-readme-stats.vercel.app/api/top-langs?username=${u}&layout=compact&hide_border=true&${c}`} />
      </div>
    </section>
  )
}
