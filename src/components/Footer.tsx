export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)]">
      <div className="container-max mx-auto px-4 md:px-6 py-6 text-center text-sm text-[var(--color-muted)]">
        <p>
          © {new Date().getFullYear()} Sohail Ahmed. All rights reserved. ·
          <a className="hover:text-[var(--color-accent)] ml-1" href="#about">Back to top</a>
        </p>
      </div>
    </footer>
  );
}


