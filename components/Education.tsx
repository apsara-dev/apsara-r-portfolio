import Section from "./Section";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-6">
        {education.map((e) => (
          <li key={e.title} className="border-l-2 border-accent pl-4">
            <p className="font-medium">{e.title}</p>
            <p className="text-muted">{e.school}</p>
            <p className="text-sm text-muted">
              {e.period}. {e.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
