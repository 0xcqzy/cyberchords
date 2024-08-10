"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  // State to manage the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hook to get the current pathname
  const pathname = usePathname();

  // Function to check if a given path is active
  const isActive = (href) => pathname === href;

  // Function to toggle the menu open/close
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  // Menu items configuration
  const menuItems = [
    { href: '/', label: 'art', className: styles.col1 },
    { href: '/commercial', label: 'commercial', className: styles.col2 },
    { href: '/concept-studio', label: 'concept studio', className: styles.col3 },
    { href: '/info', label: 'info', className: styles.col4 }
  ];

  return (
    <nav className={styles.navbar}>
      {/* Regular nav for larger screens */}

      <div className={styles.left}>
        {menuItems.slice(0, 2).map(({ href, label, className }) => (
          <Link key={href} className={`${styles.col} ${styles.link} ${className} ${isActive(href) ? styles.active : ''}`} href={href}>
            <div className={styles.box} style={{ opacity: isActive(href) ? 1 : ' ' }}></div>
            <div>{label}</div>
          </Link>
        ))}
      </div>

      <div className={styles.right}>
        {menuItems.slice(2).map(({ href, label, className }) => (
          <Link key={href} className={`${styles.col} ${styles.link} ${className} ${isActive(href) ? styles.active : ''}`} href={href}>
            <div>{label}</div>
            <div className={styles.box} style={{ opacity: isActive(href) ? 1 : ' ' }}></div>
          </Link>
        ))}
      </div>

      {/* Menu button for smaller screens */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Fullscreen overlay menu */}
      {isMenuOpen && (
        <div className={styles.fullscreenMenu}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            ✕
          </button>
          {menuItems.map(({ href, label, className }) => (
            <Link key={href} className={`${styles.fullscreenLink} ${className} ${isActive(href) ? styles.active : ''}`} href={href} onClick={toggleMenu}>
              <div>{label}</div>
              <div className={styles.box} style={{ opacity: isActive(href) ? 1 : ' ' }}></div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
