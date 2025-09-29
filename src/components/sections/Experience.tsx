import { EXPERIENCE } from "@/utils/content";

export default function Experience() {
  return (
    <section id="experience" className="section container-max mx-auto px-4 md:px-6 py-12" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {EXPERIENCE.map((job) => (
          <div key={job.company + job.role} className="p-5 rounded-lg border border-[var(--border)] bg-[var(--card)]">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-lg font-semibold">{job.role} · {job.company}</h3>
              <span className="text-sm text-[var(--color-muted)]">{job.period}</span>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


