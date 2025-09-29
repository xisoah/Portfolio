import { SKILLS } from "@/utils/content";

export default function Skills() {
  return (
    <section id="skills" className="section container-max mx-auto px-4 md:px-6 py-12" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="p-5 rounded-lg border border-[var(--border)] bg-[var(--card)]">
            <h3 className="font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="text-sm px-2 py-1 rounded bg-black/20 border border-[var(--border)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


