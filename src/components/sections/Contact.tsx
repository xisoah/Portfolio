import { CONTACT } from "@/utils/content";

export default function Contact() {
  return (
    <section id="contact" className="section container-max mx-auto px-4 md:px-6 py-12" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-5 rounded-lg border border-[var(--border)] bg-[var(--card)]">
          <h3 className="font-semibold mb-2">Get in touch</h3>
          <p className="text-sm text-[var(--color-muted)] mb-4">
            {"I'd love to connect about security roles, VAPT engagements, or collaboration."}
          </p>
          <form className="space-y-3" method="POST" action="https://formspree.io/f/your-id">
            <input name="name" required placeholder="Name" className="w-full px-3 py-2 rounded border border-[var(--border)] bg-transparent" />
            <input type="email" name="email" required placeholder="Email" className="w-full px-3 py-2 rounded border border-[var(--border)] bg-transparent" />
            <textarea name="message" rows={4} required placeholder="Message" className="w-full px-3 py-2 rounded border border-[var(--border)] bg-transparent" />
            <button className="px-4 py-2 rounded-md bg-[var(--color-accent)] text-[var(--color-background)] hover:opacity-90 transition">Send</button>
          </form>
        </div>
        <div className="p-5 rounded-lg border border-[var(--border)] bg-[var(--card)]">
          <h3 className="font-semibold mb-2">Direct</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-[var(--color-accent)]" href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a></li>
            <li><a className="hover:text-[var(--color-accent)]" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a className="hover:text-[var(--color-accent)]" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}


