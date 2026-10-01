import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[62ch] space-y-4 text-lg leading-relaxed">
        {profile.summary.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
