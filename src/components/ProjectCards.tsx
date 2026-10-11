import { Link } from "react-router-dom";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  const tags = [];
  for (let i = 0; i < project.technologies.length; i++) {
    tags.push(
      <span key={project.technologies[i]} className="rounded bg-panel px-2 py-1 text-xs text-muted">
        {project.technologies[i]}
      </span>
    );
  }

  return (
    <article className="group">
      <Link to={"/portfolio/" + project.slug} className="block overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={"Screenshot of " + project.title}
          width={800}
          height={800}
          loading="lazy"
          className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>
      <h3 className="mt-3 font-semibold">{project.title}</h3>
      <p className="mb-3 text-sm text-muted">{project.summary}</p>
      <div className="mb-3 flex flex-wrap gap-2">{tags}</div>
      <Link to={"/portfolio/" + project.slug} className="text-sm font-medium text-karma hover:underline">
        View details
      </Link>
    </article>
  );
}