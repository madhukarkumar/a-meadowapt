export const siteInfo = {
  name: 'Meadowview Apartments',
  phone: '417-823-3950',
  phoneHref: 'tel:+14178233950',
  email: 'info@jnmrealtygroup.com',
  emailHref: 'mailto:info@jnmrealtygroup.com',
  address: ['3460 E Lombard St', 'Springfield, MO 65809'],
  mapSrc:
    'https://maps.google.com/maps?q=3460%20E%20Lombard%20St%20Springfield%2C%20MO%2065809&t=m&z=10&output=embed&iwloc=near',
};

export const navItems = [
  { label: 'Home', href: '#welcome' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Contact', href: '#contact' },
] as const;

export const navCta = { label: 'Contact Us', href: '#contact' } as const;

export const galleryImages = [
  {
    src: '/wp-content/uploads/2024/01/Lombard-Drone-Back-1-scaled.jpg',
    alt: 'Aerial view of Meadowview Apartments',
  },
  {
    src: '/wp-content/uploads/2024/01/1-PH-scaled.jpg',
    alt: 'Apartment interior',
  },
  {
    src: '/wp-content/uploads/2024/01/2-PH-scaled.jpg',
    alt: 'Apartment interior',
  },
  {
    src: '/wp-content/uploads/2024/01/3-PH-scaled.jpg',
    alt: 'Apartment interior',
  },
  {
    src: '/wp-content/uploads/2024/01/4-PH-scaled.jpg',
    alt: 'Apartment interior',
  },
  {
    src: '/wp-content/uploads/2024/01/5-PH-scaled.jpg',
    alt: 'Apartment interior',
  },
  {
    src: '/wp-content/uploads/2024/01/Kitchen.jpg',
    alt: 'Apartment kitchen',
  },
  {
    src: '/wp-content/uploads/2024/01/Lombard-12-scaled.jpg',
    alt: 'Meadowview Apartments exterior',
  },
] as const;

export const amenityGroups = [
  {
    title: 'Features',
    items: [
      'BBQ Area',
      'Pool',
      'Ample Parking',
      'Pets welcome',
      'Quiet community',
      'Laundry Facilities on Site',
    ],
  },
  {
    title: 'Building Amenities',
    items: ['24 Hr Maintenance', 'Central Heat & Air', 'Quiet Community'],
  },
  {
    title: 'Unit Features',
    items: [
      '2 Bedrooms',
      '1.5 Bath',
      'Fully-Equipped Kitchens',
      '900 sq ft',
      'Patio or Balcony',
      'Garden Views',
    ],
  },
] as const;

export const robynnWidget = {
  src: 'https://robynn.ai/widget/v1/robynn-widget.js',
  org: 'the-meadow-view-apartments',
  key: 'rbw_2d2da1e153fc3cfddb39d25163544b2e00f78bd113dd4f61ede03ba0d55b42d9',
} as const;
