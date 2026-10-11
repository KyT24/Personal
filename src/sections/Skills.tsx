import SectionTitle from "../components/SectionTitle";
import { skillGroups } from "../data/skills";

export default function Skills() {
  const groups = [];

  for (let i = 0; i < skillGroups.length; i++) {
    const tiles = [];
    for (let j = 0; j < skillGroups[i].items.length; j++) {
      const name = skillGroups[i].items[j];
      tiles.push(
        <div
          key={name}
          className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg bg-panel text-sm hover:bg-karma hover:text-on-karma"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-page font-semibold text-karma"
          >
            {name.charAt(0)}
          </span>
          {name}
        </div>
      );
    }

    groups.push(
      <div key={skillGroups[i].title} className="mb-10">
        <h3 className="mb-4 text-center text-sm font-medium uppercase tracking-wide text-muted">
          {skillGroups[i].title}
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">{tiles}</div>
      </div>
    );
  }

  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <SectionTitle title="My Skills" />
      {groups}
    </section>
  );
}