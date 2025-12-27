import { ProjectFrontmatter } from "../../types/project";
import { MarkdownRenderer } from "../../lib/markdown";

type Props = {
  content: string;
  frontmatter: ProjectFrontmatter;
};

export default function ProjectContent({ content, frontmatter }: Props) {
  return (
    <div className="prose max-w-none"> 
      <h1 className="text-2xl font-bold">{frontmatter.title}</h1>

      {frontmatter.cover && (
        <img
          src={frontmatter.cover}
          alt={frontmatter.title}
          className="my-4 rounded"
        />
      )}

      {frontmatter.description && (
        <p className="text-slate-600 mb-4">{frontmatter.description}</p>
      )}

      {frontmatter.tech && (
        <div className="mb-4">
          <strong>Tech:</strong> {frontmatter.tech.join(", ")}
        </div>
      )}

      <MarkdownRenderer content={content} />
    </div>
  );
}
