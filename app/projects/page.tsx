import { getAllProjects } from "../../lib/projects";
import ProjectCard from "../../components/project/ProjectCard";

export default function Projects() {
  const projects = getAllProjects();
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
