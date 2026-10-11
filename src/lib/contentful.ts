import { createClient } from "contentful";
import type { Project } from "../types";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

interface ProjectFields {
  title: string;
  slug: string;
  summary: string;
  technologies: string[];
  situation: string;
  task: string;
  action: string;
  result: string;
  liveUrl?: string;
  repoUrl?: string;
  image: { fields: { file: { url: string } } };
}

export async function getProjects(): Promise<Project[]> {
  const response = await client.getEntries({ content_type: "project" });
  const projects: Project[] = [];

  for (let i = 0; i < response.items.length; i++) {
    const fields = response.items[i].fields as unknown as ProjectFields;
    projects.push({
      slug: fields.slug,
      title: fields.title,
      summary: fields.summary,
      image: "https:" + fields.image.fields.file.url + "?w=800&fm=webp",
      technologies: fields.technologies,
      situation: fields.situation,
      task: fields.task,
      action: fields.action,
      result: fields.result,
      liveUrl: fields.liveUrl,
      repoUrl: fields.repoUrl,
    });
  }

  return projects;
}