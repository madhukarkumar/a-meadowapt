import { navCta } from '@/lib/site-content';

export function Welcome() {
  return (
    <section className="welcome" id="welcome">
      <h2>Welcome to Meadowview Apartments</h2>
      <p>
        Looking for a quiet, convenient place to live in Springfield, Missouri?
        Consider the Meadowview Apartments. These apartments offer access to
        parks, jogging and bicycle paths, schools, churches, shopping, dining,
        and entertainment - perfect for those who appreciate convenience,
        comfort, and privacy.
      </p>
      <a href={navCta.href} className="btn-primary">
        <span>{navCta.label}</span>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z" />
        </svg>
      </a>
    </section>
  );
}
