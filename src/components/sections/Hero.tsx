import Image from "next/image";
import { SUMMARY, CONTACT } from "@/utils/content";

export default function Hero() {
  return (
    <section id="about" className="section container-max mx-auto px-4 md:px-6 pt-24" data-aos="fade-up">
      <div className="grid md:grid-cols-[1fr_auto] items-center gap-8 md:gap-12">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Sohail Ahmed</h1>
          <p className="text-[var(--color-muted)] mb-6">
            Security Analyst with 3+ years in VAPT & Application Security
          </p>
          <p className="max-w-2xl mb-6">{SUMMARY}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-md bg-[var(--color-accent)] text-[var(--color-background)] hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-4 py-2 rounded-md border border-[var(--border)] hover:bg-[var(--card)] transition"
              download
            >
              Download Resume
            </a>
          </div>
          <div className="mt-6 text-sm text-[var(--color-muted)] flex gap-4 flex-wrap">
            <a href={`tel:${CONTACT.phone}`} className="hover:text-[var(--color-accent)]">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-[var(--color-accent)]">{CONTACT.email}</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">LinkedIn</a>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[var(--border)]">
            <Image src="/images/profile.svg" alt="Profile" fill priority />
          </div>
        </div>
      </div>
    </section>
  );
}


