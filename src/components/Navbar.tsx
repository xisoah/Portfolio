"use client";

import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-auto container-max w-full flex items-center justify-between px-4 md:px-6 py-3">
        <Link href="#about" className="flex items-center gap-2 font-semibold">
          <span>Sohail Ahmed</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm hover:text-[var(--color-accent)] transition"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            className="text-sm px-3 py-2 rounded-md bg-[var(--color-accent)] text-[var(--color-background)] hover:opacity-90 transition"
            download
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
