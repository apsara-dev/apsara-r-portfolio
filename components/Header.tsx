import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold">
          {profile.name}
        </a>
        <nav className="flex items-center gap-5 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-muted transition-colors hover:text-ink sm:inline"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
