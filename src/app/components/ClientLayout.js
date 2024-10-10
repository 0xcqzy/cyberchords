// src/app/components/ClientLayout.js
'use client'; // Mark as a client component
import { useEffect, useState } from 'react';
import Preloader from './Preloader'; // Adjust the path as necessary

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 30); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : children} {/* Show preloader or children */}
    </>
  );
}
