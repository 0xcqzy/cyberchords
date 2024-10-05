import './global.css';
import { Protest_Strike, Orbitron } from 'next/font/google';

// Import the fonts with their specific weights and subsets
const primaryFont = Protest_Strike({
  weight: '400',
  subsets: ['latin'],
  variable: '--primary-font',
});

const secondaryFont = Orbitron({
  weight: '700',
  subsets: ['latin'],
  variable: '--secondary-font',
});

// Metadata can stay here as part of your layout
export const metadata = {
  title: 'Cyberchords',
  // description: 'a website ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${primaryFont.variable} ${secondaryFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
