import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const link = "text-accent underline-offset-4 hover:underline";
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[40ch] font-display text-3xl font-semibold leading-tight">
        I'm open to entry-level Python and web developer roles.
      </p>
      <dl className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-[7rem_1fr]">
        <dt className="text-muted">Email</dt>
        <dd><a className={link} href={`mailto:${profile.email}`}>{profile.email}</a></dd>
        <dt className="text-muted">Phone</dt>
        <dd><a className={link} href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></dd>
        <dt className="text-muted">LinkedIn</dt>
        <dd><a className={link} href={profile.linkedin} target="_blank" rel="noreferrer">apsara-rb59794280</a></dd>
        {profile.github && (
          <>
            <dt className="text-muted">GitHub</dt>
            <dd><a className={link} href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace("https://", "")}</a></dd>
          </>
        )}
        <dt className="text-muted">Location</dt>
        <dd>{profile.location}</dd>
        <dt className="text-muted">Resume</dt>
        <dd><a className={link} href={profile.resume}>Download PDF</a></dd>
      </dl>
    </Section>
  );
}
