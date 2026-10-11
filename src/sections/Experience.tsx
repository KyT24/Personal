import SectionTitle from "../components/SectionTitle";
import { jobs } from "../data/experience";

export default function Experience() {
  const items = [];

  for (let i = 0; i < jobs.length; i++) {
    const duties = [];
    for (let j = 0; j < jobs[i].responsibilities.length; j++) {
      duties.push(<li key={j}>{jobs[i].responsibilities[j]}</li>);
    }

    items.push(
      <div key={i} className="flex gap-4 md:gap-6">
        <span className="h-fit w-28 shrink-0 rounded bg-panel px-2 py-1 text-center text-xs text-muted">
          {jobs[i].period}
        </span>
        <div className="relative border-l-2 border-line pb-10 pl-6">
          <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-karma" />
          <h3 className="font-semibold">{jobs[i].title}</h3>
          <p className="mb-2 text-sm text-muted">{jobs[i].company}</p>
          <ul className="list-disc pl-5 text-sm text-muted">{duties}</ul>
        </div>
      </div>
    );
  }

  return (
    <section id="experience" className="bg-panel/40">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <SectionTitle title="Experience" />
        {items}
      </div>
    </section>
  );
}