import Link from "next/link";
import { getAllProjects } from "../lib/projects";
import ProjectCard from "../components/project/ProjectCard";
import Image from "next/image";

type AvatarProps = {
  src?: string;
  initials?: string;
  size?: number; // px
};

export function AvatarSVG({
  src = "/images/boku.jpeg",
  initials = "DA",
  size = 80,
}: AvatarProps) {
  return (
    <div
      className="relative rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-md flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt="Dayron Anjos"
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      ) : (
        <span className="text-white font-semibold">
          {initials}
        </span>
      )}
    </div>
  );
}

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      {/* HERO */}
      <header className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Left: Headline / Intro */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-5 mb-6">
                <AvatarSVG />
                <div>
                  <div className="kicker">Systems Analysis · Software Engineering</div>
                  <div className="text-xs text-slate-500 mt-1">Student · IT Support Analyst · Automation</div>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl leading-tight font-extrabold tracking-tight text-slate-900 mb-6">
                I build reliable software systems
                <span className="ml-1 inline-block w-3 h-3 rounded-full bg-brand align-middle" />
              </h1>

              <p className="text-lg text-slate-600 max-w-3xl mb-8">
                I design backend solutions, automation pipelines and production-minded tooling that reduce manual work
                and scale safely. My focus is maintainability, observability and engineering discipline — not shortcuts.
              </p>

              <div className="flex flex-wrap gap-3 items-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-brand text-white rounded-lg font-medium shadow hover:translate-y-[-2px] transition-transform"
                >
                  {/* minimal inline icon */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                  </svg>
                  View projects
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
                >
                  Contact
                </Link>

                <span className="ml-3 text-sm text-slate-500">• Available for junior roles</span>
              </div>

              {/* Key stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-2xl">
                <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl font-semibold">8+</div>
                  <div className="text-xs text-slate-500">Projects</div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl font-semibold">Automation</div>
                  <div className="text-xs text-slate-500">Operational gains</div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl font-semibold">JLPT N4</div>
                  <div className="text-xs text-slate-500">Studying N3</div>
                </div>
              </div>
            </div>

            {/* Right: Highlight panel with tech + micro-bio */}
            <aside className="md:col-span-5">
              <div className="sticky top-20">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                  <h4 className="text-lg font-semibold mb-3">Current focus</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Backend systems, automation tooling and maintainable architecture. Recent work with Python, JavaScript and PHP.
                  </p>

                  <div className="mb-4">
                    <h5 className="text-xs text-slate-500 uppercase mb-2 tracking-wide">Core technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="chip">Python</span>
                      <span className="chip">JavaScript</span>
                      <span className="chip">PHP</span>
                      <span className="chip">MySQL</span>
                      <span className="chip">Linux</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-xs text-slate-500 uppercase mb-2 tracking-wide">Selected</h5>
                    <ul className="text-sm space-y-2 text-slate-700">
                      <li>Prototype architect — JurisBridge AI (document automation)</li>
                      <li>Production scripts for N1 support team — automation & observability</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <Link
                      href="/about"
                      className="inline-block px-4 py-2 border rounded-md text-sm hover:bg-slate-50"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="ml-2 inline-block px-4 py-2 bg-brand text-white rounded-md text-sm"
                    >
                      Hire / Collaborate
                    </Link>
                  </div>
                </div>

                <div className="mt-6 text-xs text-slate-500">
                  <strong className="text-slate-700">Note:</strong> this portfolio highlights engineering work — case studies include architecture, choices and measurable results.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* PROJECTS: more visual, cards with subtle overlay */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Selected projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium shadow hover:opacity-95 transition"
            >
              View all projects
            </Link>
          </div>
        </div>
      </main>

      {/* FINAL CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-100 to-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-slate-50">
            <div>
              <h3 className="text-2xl font-bold">Looking for a junior engineer who values craft?</h3>
              <p className="text-slate-600 mt-2">I’m available for roles and projects that value automation, maintainability and clear engineering trade-offs.</p>
            </div>

            <div className="flex gap-3">
              <Link href="/contact" className="inline-block px-6 py-3 bg-brand text-white rounded-lg font-medium">Get in touch</Link>
              <Link href="/files/Dayron-Anjos-Resume.pdf" className="inline-block px-6 py-3 border rounded-lg">Download resume</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
