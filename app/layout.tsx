import type { Metadata } from 'next';
import './globals.css';

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
      <body className='antialiased font-khmer-noto bg-[#FFF9EF] text-[#2C1810]'>
        {children}
      </body>
    </html>
  );
}
