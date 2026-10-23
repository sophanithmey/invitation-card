import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: 'Khmer Digital Weddings | Premium Invitations',
  description:
    'Create unforgettable digital wedding invitations with elegant Khmer designs. Features interactive maps, RSVP, and gorgeous themes for your special day.',
  openGraph: {
    type: 'website',
    locale: 'km_KH',
    title: 'Khmer Digital Weddings | Premium Invitations',
    description:
      'Create unforgettable digital wedding invitations with elegant Khmer designs.',
    siteName: 'Soursdey Digital Weddings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khmer Digital Weddings | Premium Invitations',
    description:
      'Create unforgettable digital wedding invitations with elegant Khmer designs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='km'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Battambang:wght@400;700&family=Great+Vibes&family=Kantumruuy+Pro:wght@400;600;700&family=Moul&family=Moulpali&family=Noto+Sans+Khmer:wght@400;600;700&family=Playfair+Display:wght@400;600;700&family=Suwannaphum:wght@400;700&display=swap'
        />
      </head>
      <body className='antialiased font-khmer bg-[#FFF9EF] text-[#2C1810]'>
        {children}
      </body>
    </html>
  );
}
