import Image from "next/image";
import { PROJECTS } from "@/utils/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section container-max mx-auto px-4 md:px-6 py-12"
      data-aos="fade-up"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--card)]"
          >
            <div className="relative w-full h-40">
              <Image src={p.image} alt={p.title} fill />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{p.subtitle}</p>
              <p className="mt-2 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-black/20 border border-[var(--border)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4 text-sm text-[var(--color-accent)]">
                <a
                  href={p.link}
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>

                <span className="text-[var(--color-accent)]">·</span>

                <a
                  href={p.github}
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
