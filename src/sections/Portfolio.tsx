import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCards";
import { useProjects } from "../context/ProjectsContext";

export default function Portfolio() {
  const { projects, loading } = useProjects();
  const [visible, setVisible] = useState(3);

  function showMore() {
    setVisible(visible + 3);
  }

  const cards = [];
  for (let i = 0; i < projects.length && i < visible; i++) {
    cards.push(<ProjectCard key={projects[i].slug} project={projects[i]} />);
  }

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="Portfolio" />
      {loading && <p className="text-center">Loading projects...</p>}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cards}</div>
      {visible < projects.length && (
        <div className="mt-10 text-center">
          <button
            onClick={showMore}
            className="rounded-md bg-karma px-6 py-2 text-sm font-medium text-on-karma hover:opacity-90"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}