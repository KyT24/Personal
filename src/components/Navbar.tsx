import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Logo from "./Logo";

const links = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const items = [];
  for (let i = 0; i < links.length; i++) {
    items.push(
      <a
        key={links[i].href}
        href={links[i].href}
        onClick={() => setOpen(false)}
        className="text-sm hover:text-karma"
      >
        {links[i].label}
      </a>
    );
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-page/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href="/" aria-label="Home">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {items}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
            className="rounded-md border border-line px-3 py-1 text-sm hover:border-karma"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
          aria-expanded={open}
          className="rounded-md border border-line px-3 py-1 text-sm md:hidden"
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-line px-6 py-4 md:hidden">
          {items}
          <button onClick={toggleTheme} className="text-left text-sm" aria-label="Toggle dark and light theme">
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      )}
    </header>
  );
}