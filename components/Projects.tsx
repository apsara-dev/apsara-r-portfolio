import Section from "./Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-14">
        {projects.map((p) => (
          <article key={p.name}>
            <p className="text-sm text-muted">{p.kind}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold leading-snug sm:text-3xl">{p.name}</h3>

            <dl className="mt-6 grid gap-x-8 gap-y-5 text-base leading-relaxed sm:grid-cols-[7rem_1fr]">
              <dt className="font-medium text-muted">Problem</dt>
              <dd>{p.problem}</dd>
              <dt className="font-medium text-muted">Solution</dt>
              <dd>{p.solution}</dd>
              <dt className="font-medium text-muted">What I did</dt>
              <dd>
                <ul className="list-disc space-y-1 pl-5 marker:text-accent">
                  {p.contribution.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </dd>
              <dt className="font-medium text-muted">Outcome</dt>
              <dd className="font-medium">{p.outcome}</dd>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded-md border border-line px-2.5 py-1 text-sm text-muted">
                  {t}
                </li>
              ))}
            </ul>

            {(p.demo || p.code) && (
              <div className="mt-5 flex gap-5 text-sm font-medium">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
                    Open live demo
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
                    View source code
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
