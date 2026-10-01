import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experience.map((e) => (
        <article key={e.company + e.period}>
          <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
          <p className="mt-1 text-muted">
            {e.company}, {e.place}. {e.period}
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed marker:text-accent">
            {e.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  );
}
