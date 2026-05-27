import { Amenities } from '@/components/amenities';
import { Contact } from '@/components/contact';
import { Gallery } from '@/components/gallery';
import { Hero } from '@/components/hero';
import { RobynnWidget } from '@/components/robynn-widget';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Welcome } from '@/components/welcome';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Welcome />
        <Gallery />
        <Amenities />
        <Contact />
      </main>
      <SiteFooter />
      <RobynnWidget />
    </>
  );
}
