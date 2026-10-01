import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-1 py-3 first:pt-0 sm:grid-cols-[12rem_1fr] sm:gap-6">
            <dt className="text-muted">{s.group}</dt>
            <dd className="font-medium">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
