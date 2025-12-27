import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectFrontmatter } from "../types/project";

const projectsDir = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs() {
  return fs.readdirSync(projectsDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = path.join(projectsDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as ProjectFrontmatter;
  frontmatter.slug = realSlug;
  return { frontmatter, content };
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs.map((filename) => {
    const realSlug = filename.replace(/\.mdx?$/, "");
    const { frontmatter } = getProjectBySlug(realSlug);
    return frontmatter;
  });
  projects.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });
  return projects;
}
