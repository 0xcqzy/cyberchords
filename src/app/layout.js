import './global.css';
import { Work_Sans, Orbitron } from 'next/font/google';

// Import the fonts with their specific weights and subsets
const primaryFont = Work_Sans({
  weight: '800', // Ensure this is a string
  subsets: ['latin'],
  variable: '--primary-font',
});

const secondaryFont = Orbitron({
  weight: '900',
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
