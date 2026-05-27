import Image from 'next/image';
import { navCta, navItems } from '@/lib/site-content';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#" className="logo">
        <Image
          src="/wp-content/uploads/2024/04/MV-Logo-Trans.png"
          alt="Meadowview Apartments"
          width={400}
          height={200}
          priority
        />
      </a>
      <nav>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href={navCta.href} className="nav-cta">
          {navCta.label}
        </a>
      </nav>
    </header>
  );
}
