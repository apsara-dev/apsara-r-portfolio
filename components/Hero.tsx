import { profile, stackHighlights } from "@/data/portfolio";

// The hero shows the candidate as an API response, built only from real profile data.
const lines = [
  `  "name": "${profile.name}",`,
  `  "role": "${profile.title}",`,
  `  "stack": [${stackHighlights.map((s) => `"${s}"`).join(", ")}],`,
  `  "education": "B.Tech, Computer Science & Engineering, 2025",`,
  `  "location": "${profile.location}",`,
  `  "open_to": "${profile.openTo}"`,
];

export default function Hero() {
  return (
    <section id="top" className="grid items-center gap-12 py-14 md:grid-cols-[1.1fr_1fr] md:py-24">
      <div>
        <p className="mb-4 text-muted">{profile.title}</p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-muted sm:text-xl">
          {profile.positioning}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90"
          >
            See my projects
          </a>
          <a
            href={profile.resume}
            className="rounded-md border border-line px-5 py-2.5 font-medium transition-colors hover:border-accent"
          >
            Download resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md px-3 py-2.5 font-medium text-accent underline-offset-4 hover:underline"
          >
            Email me
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-line bg-panel font-mono text-[13px] leading-6 sm:text-sm" aria-hidden="true">
        <div className="flex items-center justify-between border-b border-line px-4 py-2 text-muted">
          <span>GET /api/developers/apsara</span>
          <span className="text-accent">200 OK</span>
        </div>
        <pre className="overflow-x-auto px-4 py-4">
          <div className="reveal-line" style={{ animationDelay: "0.1s" }}>{"{"}</div>
          {lines.map((l, i) => (
            <div key={i} className="reveal-line whitespace-pre" style={{ animationDelay: `${0.25 + i * 0.18}s` }}>
              {l}
            </div>
          ))}
          <div className="reveal-line" style={{ animationDelay: `${0.25 + lines.length * 0.18}s` }}>{"}"}</div>
        </pre>
      </div>
    </section>
  );
}
