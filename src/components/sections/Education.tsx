import { EDUCATION } from "@/utils/content";

export default function Education() {
  return (
    <section id="education" className="section container-max mx-auto px-4 md:px-6 py-12" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {EDUCATION.map((e) => (
          <div key={e.degree + e.school} className="p-5 rounded-lg border border-[var(--border)] bg-[var(--card)]">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-lg font-semibold">{e.degree} · {e.school}</h3>
              <span className="text-sm text-[var(--color-muted)]">{e.period}</span>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              {e.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


