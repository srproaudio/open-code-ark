export const Mark = (props: { class?: string }) => {
  return (
    <svg
      data-component="logo-mark"
      classList={{ [props.class ?? ""]: !!props.class }}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized "A" mark for Architect Agent - modern geometric style */}
      <defs>
        <linearGradient id="mark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--icon-interactive-base)" />
          <stop offset="100%" stop-color="var(--icon-strong-base)" />
        </linearGradient>
      </defs>
      {/* Outer triangle */}
      <path d="M16 4L4 28H28L16 4Z" fill="none" stroke="url(#mark-gradient)" stroke-width="2" />
      {/* Inner A crossbar and shadow */}
      <path d="M10 22H22" stroke="var(--icon-base)" stroke-width="2" />
      {/* Inner filled area */}
      <path d="M16 10L11 22H21L16 10Z" fill="var(--icon-weak-base)" opacity="0.5" />
    </svg>
  )
}

export const Logo = (props: { class?: string }) => {
  return (
    <div
      data-component="logo"
      classList={{ [props.class ?? ""]: !!props.class }}
      style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        gap: "0.25rem",
        "font-family": "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Main title */}
      <div
        style={{
          "font-size": "2rem",
          "font-weight": "700",
          "letter-spacing": "-0.02em",
          "line-height": "1",
          color: "var(--text-strong)",
        }}
      >
        Architect
      </div>
      {/* Subtitle */}
      <div
        style={{
          "font-size": "1.25rem",
          "font-weight": "300",
          "letter-spacing": "0.2em",
          "text-transform": "uppercase",
          color: "var(--text-base)",
          opacity: "0.8",
        }}
      >
        Agent
      </div>
    </div>
  )
}

// Alternative SVG-based logo for contexts where SVG is preferred
export const LogoSVG = (props: { class?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 200"
      role="img"
      aria-label="ARCHITECT AGENT logo"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="currentColor"
        font-size="96"
        font-weight="700"
        letter-spacing="4"
        font-family="Inter, SF Pro Display, Helvetica Neue, Arial, sans-serif"
      >
        ARCHITECT AGENT
      </text>
    </svg>
  )
}
