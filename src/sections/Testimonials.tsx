import SectionTitle from "../components/SectionTitle";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const cards = [];

  for (let i = 0; i < testimonials.length; i++) {
    cards.push(
      <figure key={i} className="grid overflow-hidden rounded-2xl bg-panel md:grid-cols-[1fr_auto]">
        <div className="p-8">
          <blockquote className="mb-4 border-l-2 border-karma pl-4 text-muted">
            "{testimonials[i].quote}"
          </blockquote>
          <figcaption>
            <p className="font-semibold">{testimonials[i].name}</p>
            <p className="text-sm text-muted">{testimonials[i].role}</p>
          </figcaption>
        </div>
        <div className="bg-karma p-4">
          <img
            src={testimonials[i].photo}
            alt={"Photo of " + testimonials[i].name}
            width={160}
            height={200}
            loading="lazy"
            className="mx-auto h-48 w-40 rounded-xl object-cover"
          />
        </div>
      </figure>
    );
  }

  return (
    <section id="testimonials" className="mx-auto max-w-4xl px-6 py-20">
      <SectionTitle title="Testimonial" />
      <div className="flex flex-col gap-6">{cards}</div>
    </section>
  );
}