import { createElement } from "react";

export default function SectionTitle({ title }: { title: string }) {
  return createElement(
    "h2",
    { className: "mb-10 text-center font-serif text-3xl font-semibold md:text-4xl" },
    title,
  );
}