import SectionTitle from "../components/SectionTitle";

const values = [
  { title: "Timeliness", text: "I deliver on the agreed schedule." },
  { title: "Attention to detail", text: "I check every pixel and every edge case." },
  { title: "Clear communication", text: "You always know where the project stands." },
];

export default function About() {
  const valueCards = [];
  for (let i = 0; i < values.length; i++) {
    valueCards.push(
      <div key={values[i].title} className="rounded-lg bg-panel p-5">
        <h3 className="mb-1 font-semibold text-karma">{values[i].title}</h3>
        <p className="text-sm text-muted">{values[i].text}</p>
      </div>
    );
  }

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <SectionTitle title="About" />
      <p className="mb-4 border-l-2 border-karma pl-4 text-muted">
        A recent lost student that dove into the world of coding and web development. I am <span className="text-karma">Detailed</span>,{" "}
        <span className="text-karma">Critical</span>, and an{" "}
        <span className="text-karma">Excellent Communicator</span>.
      </p>
      <p className="mb-8 pl-4">
        <strong>Core skills:</strong> JavaScript, TypeScript, React, Node.js, Tailwind CSS.
      </p>
      <div className="grid gap-4 md:grid-cols-3">{valueCards}</div>
    </section>
  );
}