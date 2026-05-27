import Image from 'next/image';
import { galleryImages } from '@/lib/site-content';

const imageDimensions: Record<string, { width: number; height: number }> = {
  '/wp-content/uploads/2024/01/Lombard-Drone-Back-1-scaled.jpg': {
    width: 1600,
    height: 1067,
  },
  '/wp-content/uploads/2024/01/1-PH-scaled.jpg': {
    width: 1600,
    height: 1067,
  },
  '/wp-content/uploads/2024/01/2-PH-scaled.jpg': {
    width: 1600,
    height: 1067,
  },
  '/wp-content/uploads/2024/01/3-PH-scaled.jpg': {
    width: 1600,
    height: 1067,
  },
  '/wp-content/uploads/2024/01/4-PH-scaled.jpg': {
    width: 1600,
    height: 911,
  },
  '/wp-content/uploads/2024/01/5-PH-scaled.jpg': {
    width: 1600,
    height: 911,
  },
  '/wp-content/uploads/2024/01/Kitchen.jpg': {
    width: 750,
    height: 428,
  },
  '/wp-content/uploads/2024/01/Lombard-12-scaled.jpg': {
    width: 1600,
    height: 1068,
  },
};

export function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2>Gallery</h2>
      <div className="divider"></div>
      <div className="gallery-grid">
        {galleryImages.map((image) => {
          const dimensions = imageDimensions[image.src];

          return (
            <div className="gallery-item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={dimensions.width}
                height={dimensions.height}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
