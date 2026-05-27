export const siteInfo = {
  name: 'Meadowview Apartments',
  phone: '(417) 823-3950',
  phoneHref: 'tel:+14178233950',
  email: 'info@jnmrealtygroup.com',
  emailHref: 'mailto:info@jnmrealtygroup.com',
  address: '3460 E Lombard St Springfield, MO 65809',
  mapSrc:
    'https://maps.google.com/maps?q=3460%20E%20Lombard%20St%20Springfield%2C%20MO%2065809&t=m&z=10&output=embed&iwloc=near',
};

export const navItems = [
  { label: 'Home', href: '#welcome' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Contact', href: '#contact' },
] as const;

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

export const amenities = [
  'Pet Friendly',
  'Washer/Dryer Connections',
  'Private Patio/Balcony',
  'Reserved Parking',
  'Central Air Conditioning',
  'Fully Equipped Kitchen',
  'On-Site Management',
  'Convenient Location',
] as const;
