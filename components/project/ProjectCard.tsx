import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <article className="card overflow-hidden">
      <div className="card-cover">
        {project.cover ? (
          <img src={project.cover} alt={project.title} />
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-slate-100 to-slate-50 flex items-center justify-center text-slate-400">No cover</div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>
          <div className="text-xs text-slate-400">{project.date ? new Date(project.date).getFullYear() : ""}</div>
        </div>

        <p className="text-slate-600 mt-2 text-sm">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {(project.tech || []).slice(0,6).map((t: string) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-brand hover:underline">Read case</Link>
          <div className="text-xs text-slate-400">•</div>
        </div>
      </div>
    </article>
  );
}
