import Link from "next/link";

export const metadata = {
  title: "About — Dayron Anjos",
  description:
    "Dayron Anjos — Software engineering student & IT Support Analyst. Backend, automation and maintainability focused.",
};

function AvatarSVG({ initials = "DA" }: { initials?: string }) {
  return (
    <div
      aria-hidden
      className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center shadow-md"
    >
      <span className="text-white font-semibold">{initials}</span>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Main column */}
          <main className="md:col-span-2 space-y-8">
            <article className="bg-white rounded-2xl p-8 shadow-sm">
              <header className="flex items-center gap-5">
                {/* Replace AvatarSVG with <img src="/images/avatar.png" ... /> when ready */}
                <AvatarSVG />

                <div>
                  <h1 className="text-2xl font-extrabold">Hi — I’m Dayron Anjos</h1>
                  <p className="text-slate-600 mt-2 max-w-xl">
                    I design and implement backend systems, automation pipelines and production-minded tooling that
                    reduce manual work and scale safely. My focus is maintainability, observability and engineering
                    discipline — practical solutions with measurable impact.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 items-center">
                    <Link
                      href="/projects"
                      className="inline-block px-4 py-2 bg-brand text-white rounded-md font-medium shadow-sm"
                    >
                      See projects
                    </Link>

                    <Link href="/contact" className="inline-block px-4 py-2 border rounded-md">
                      Contact
                    </Link>

                    <a
                      href="/files/Dayron-Anjos-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border rounded-md"
                    >
                      Download resume
                    </a>
                  </div>
                </div>
              </header>

              {/* Quick highlights */}
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border">
                  <div className="text-sm text-slate-500">Experience</div>
                  <div className="text-lg font-semibold mt-1">IT Support (N1)</div>
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <div className="text-sm text-slate-500">Core focus</div>
                  <div className="text-lg font-semibold mt-1">Backend & Automation</div>
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <div className="text-sm text-slate-500">Language</div>
                  <div className="text-lg font-semibold mt-1">Japanese — JLPT N4 (studying N3)</div>
                </div>
              </div>
            </article>

            {/* What I do / Skills */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">What I do</h2>
              <p className="text-slate-600 mb-4">
                I deliver backend services, automation scripts and tools that reduce manual effort and improve
                reliability. I favour small, well-tested increments and clear operational runbooks.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-2">Selected competencies</h3>
                  <ul className="list-none space-y-2 text-slate-600">
                    <li>• Backend development: APIs, data modeling, server-side logic</li>
                    <li>• Automation: scripts, CI/CD, deployment pipelines</li>
                    <li>• Observability: logging, simple metrics, runbooks</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip">Python</span>
                    <span className="chip">JavaScript</span>
                    <span className="chip">PHP</span>
                    <span className="chip">MySQL</span>
                    <span className="chip">Linux</span>
                    <span className="chip">Git</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience detail */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Experience & impact</h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">IT Support Analyst — FXO (N1)</div>
                      <div className="text-xs text-slate-500">May 2024 – present</div>
                    </div>
                    <div className="text-sm text-slate-500">Brazil</div>
                  </div>
                  <ul className="list-disc ml-5 mt-3 text-slate-600">
                    <li>Handled support tickets for firewall, VPN and captive portal configurations (Fortinet stack).</li>
                    <li>Delivered automation scripts used by the technical team, reducing repetitive tasks and human error.</li>
                    <li>Collaborated on incident triage and produced documentation to speed onboarding.</li>
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-medium">Projects (selected)</div>
                  <ul className="mt-3 text-slate-600 list-disc ml-5">
                    <li>
                      <strong>JurisBridge AI —</strong> prototype for legal document automation (NLP + guided intake). Built MVP with Python + React and launched a user-facing demo.
                    </li>
                    <li>
                      <strong>Yuki Weather —</strong> small public API integration project demonstrating caching and responsive UI.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education & Certifications */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-700">Education</h3>
                  <div className="mt-3 text-slate-600">
                    <div className="font-medium">Systems Analysis & Development — Undergraduate (in progress)</div>
                    <div className="text-xs text-slate-500 mt-1">Technical high school in Systems Analysis completed.</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700">Selected certifications</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="chip">Fortinet FCA</span>
                    <span className="chip">FortiGate Operator</span>
                    <span className="chip">Data Modeling — Alura</span>
                    <span className="chip">Linux LFS101</span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-600 uppercase">Top skills</h4>
              <div className="mt-4 flex flex-col gap-3">
                <Skill name="Python" level={80} />
                <Skill name="JavaScript" level={70} />
                <Skill name="PHP" level={60} />
                <Skill name="SQL / MySQL" level={70} />
                <Skill name="Linux" level={65} />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-600 uppercase">Language</h4>
              <div className="mt-3 text-slate-700">
                <div className="font-medium">Japanese</div>
                <div className="text-sm text-slate-500">JLPT N4 — Passed. Studying for N3.</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-sm text-slate-600">
              <div className="font-medium mb-2">Contact</div>
              <div className="mb-3">dayronjp17@gmail.com</div>
              <Link href="/contact" className="inline-block px-3 py-2 bg-brand text-white rounded-md text-sm">
                Get in touch
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* small presentational skill bar — server component allowed */
function Skill({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-slate-700">{name}</div>
        <div className="text-xs text-slate-500">{level}%</div>
      </div>

      <div className="mt-2 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-brand"
          style={{ width: `${Math.max(6, Math.min(100, level))}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
