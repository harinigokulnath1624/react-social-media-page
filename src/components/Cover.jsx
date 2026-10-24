const THEMES = {
  desert: {
    sky: ["#9a9a9c", "#d9cbbd"],
    far: "#7c6d63",
    mid: "#5b4a42",
    near: "#8a6e5a",
    snow: "#e9e6e2",
  },
  forest: {
    sky: ["#8fa6a0", "#dbe6df"],
    far: "#5f7d72",
    mid: "#3f5f55",
    near: "#6f8a73",
    snow: "#eef3ef",
  },
  dusk: {
    sky: ["#6d5f9a", "#f0b3a3"],
    far: "#7a5f8c",
    mid: "#4d3d6b",
    near: "#8a6a86",
    snow: "#f4e4ea",
  },
};

/** Mountain + road cover drawn in SVG (no photo files needed). */
export default function Cover({ theme = "desert", uid }) {
  const t = THEMES[theme];
  const sky = `sky-${uid}`;
  const road = `road-${uid}`;
  return (
    <svg
      viewBox="0 0 600 340"
      preserveAspectRatio="xMidYMid slice"
      className="cover-svg"
      role="img"
      aria-label="Mountain landscape with a road"
    >
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={t.sky[0]} />
          <stop offset="1" stopColor={t.sky[1]} />
        </linearGradient>
        <linearGradient id={road} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8e6e4" stopOpacity=".95" />
          <stop offset="1" stopColor="#f3f2f2" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="600" height="340" fill={`url(#${sky})`} />
      {/* far ridge */}
      <path d="M0 150 L70 95 L130 120 L210 60 L290 110 L380 45 L470 105 L540 80 L600 120 L600 340 L0 340Z" fill={t.far} />
      {/* snow caps */}
      <path d="M210 60 L190 82 L205 78 L220 90 L232 76Z M380 45 L355 76 L372 70 L388 84 L402 68Z" fill={t.snow} opacity=".85" />
      {/* mid ridge */}
      <path d="M0 200 L90 150 L180 190 L270 140 L360 185 L450 135 L540 180 L600 160 L600 340 L0 340Z" fill={t.mid} />
      {/* near foothills */}
      <path d="M0 250 L120 205 L230 245 L300 225 L380 248 L500 208 L600 240 L600 340 L0 340Z" fill={t.near} />
      {/* road */}
      <path d="M285 232 L315 232 L400 340 L200 340Z" fill={`url(#${road})`} />
    </svg>
  );
}
