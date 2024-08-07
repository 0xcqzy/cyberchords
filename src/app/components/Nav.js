"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

const Nav = () => {
  const pathname = usePathname(); // Get the current pathname

  // Function to check if the link is active
  const isActive = (href) => pathname === href;

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link className={`${styles.col} ${styles.link} ${styles.col1}`} href="/">
          <div id={styles.box1} className={styles.box} style={{ opacity: isActive('/') ? 1 : '' }}></div>
          <div>art</div>
        </Link>

        <Link className={`${styles.col} ${styles.link} ${styles.col2}`} href="/commercial">
          <div id={styles.box2} className={styles.box} style={{ opacity: isActive('/commercial') ? 1 : '' }}></div>
          <div>commercial</div>
        </Link>
      </div>

      <div className={styles.right}>
        <Link className={`${styles.col} ${styles.link} ${styles.col3}`} href="/concept-studio">
          <div>concept studio</div>
          <div id={styles.box3} className={styles.box} style={{ opacity: isActive('/concept-studio') ? 1 : '' }}></div>
        </Link>

        <Link className={`${styles.col} ${styles.link} ${styles.col4}`} href="/info">
          <div>info</div>
          <div id={styles.box4} className={styles.box} style={{ opacity: isActive('/info') ? 1 : '' }}></div>

        </Link>
      </div>
    </nav>
  );
};

export default Nav;
