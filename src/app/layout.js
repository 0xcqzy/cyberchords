// src/app/layout.js
import './global.css'; // Ensure your global styles are imported
import { Work_Sans, Orbitron } from 'next/font/google';
import ClientLayout from './components/ClientLayout';

const primaryFont = Work_Sans({
  weight: '800',
  subsets: ['latin'],
  variable: '--primary-font',
});

const secondaryFont = Orbitron({
  weight: '900',
  subsets: ['latin'],
  variable: '--secondary-font',
});

// Metadata for the layout
export const metadata = {
  title: 'Cyberchords',
  description: 'A website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${primaryFont.variable} ${secondaryFont.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout> {/* Use ClientLayout here */}
      </body>
    </html>
  );
}
