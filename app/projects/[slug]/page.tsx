import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "../../../lib/projects";
import ProjectContent from "../../../components/project/ProjectContent";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const slugs = getProjectSlugs();

  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-16">
      <ProjectContent
        frontmatter={project.frontmatter}
        content={project.content}
      />
    </section>
  );
}
