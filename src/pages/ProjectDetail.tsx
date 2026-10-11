import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProjects } from "../context/ProjectsContext";
import type { Project } from "../types";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { projects, loading } = useProjects();

  let project: Project | undefined = undefined;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].slug === slug) {
      project = projects[i];
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = project.title + " | Your Name";
    }
  }, [project]);

  if (loading) {
    return <main className="px-6 pt-32 text-center">Loading...</main>;
  }

  if (!project) {
    return (
      <main className="px-6 pt-32 text-center">
        <p className="mb-4">Project not found.</p>
        <Link to="/" className="text-karma">Back to home</Link>
      </main>
    );
  }

  const star = [
    { label: "Situation", text: project.situation },
    { label: "Task", text: project.task },
    { label: "Action", text: project.action },
    { label: "Result", text: project.result },
  ];

  const blocks = [];
  for (let i = 0; i < star.length; i++) {
    blocks.push(
      <section key={star[i].label} className="mb-8">
        <h2 className="mb-2 font-serif text-2xl font-semibold">{star[i].label}</h2>
        <p className="text-muted">{star[i].text}</p>
      </section>
    );
  }

  const tags = [];
  for (let i = 0; i < project.technologies.length; i++) {
    tags.push(
      <span key={project.technologies[i]} className="rounded bg-panel px-3 py-1 text-sm text-muted">
        {project.technologies[i]}
      </span>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <Link to="/#portfolio" className="mb-6 inline-block text-karma">
        Back to portfolio
      </Link>
      <h1 className="mb-4 font-serif text-4xl font-semibold">{project.title}</h1>
      <div className="mb-6 flex flex-wrap gap-2">{tags}</div>
      <img
        src={project.image}
        alt={"Screenshot of " + project.title}
        width={800}
        height={450}
        className="mb-8 aspect-video w-full rounded-2xl object-cover"
      />
      {blocks}
      <div className="flex gap-6">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-karma hover:underline">
            Live site
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-karma hover:underline">
            Source code
          </a>
        )}
      </div>
    </main>
  );
}