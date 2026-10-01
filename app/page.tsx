import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <footer className="mx-auto max-w-5xl px-5 py-10 text-sm text-muted sm:px-8">
        Built with Next.js and Tailwind CSS.
      </footer>
    </>
  );
}
