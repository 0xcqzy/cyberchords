import './global.css'
import { Kanit } from '@next/font/google';
export const metadata = {
  title: 'Cyberchords',
  // description: 'a website ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
       </body>
    </html>
  )
}
