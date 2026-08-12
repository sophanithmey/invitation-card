import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cambodian Khmer Wedding Invitation Platform',
  description: 'Dynamic Cambodian Khmer Wedding Invitation Platform SaaS with multiple visual templates, themes, and dynamic URL routing.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km">
      <body className="antialiased font-khmer-noto bg-[#FFF9EF] text-[#2C1810]">
        {children}
      </body>
    </html>
  );
}
