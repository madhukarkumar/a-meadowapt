import Script from 'next/script';
import { robynnWidget } from '@/lib/site-content';

export function RobynnWidget() {
  return (
    <Script
      src={robynnWidget.src}
      data-org={robynnWidget.org}
      data-key={robynnWidget.key}
      strategy="afterInteractive"
    />
  );
}
