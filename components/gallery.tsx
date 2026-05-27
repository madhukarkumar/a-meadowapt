import Image from 'next/image';
import { galleryImages } from '@/lib/site-content';

export function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2>Gallery</h2>
      <div className="divider"></div>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div className="gallery-item" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
