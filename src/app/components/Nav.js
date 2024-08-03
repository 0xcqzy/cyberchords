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
        <Link className={`${styles.col} ${styles.link}`} href="/">
          <div>art</div>
          <div
            id={styles.box1}
            className={styles.box}
            style={{ opacity: isActive('/') ? 1 : '' }}
          ></div>
        </Link>

        <Link className={`${styles.col} ${styles.link}`} href="/commercial">
          <div>commercial</div>
          <div
            id={styles.box2}
            className={styles.box}
            style={{ opacity: isActive('/commercial') ? 1 : '' }}
          ></div>
        </Link>
      </div>

      <div className={styles.right}>
        <Link className={`${styles.col} ${styles.link}`} href="/concept-studio">
          <div
            id={styles.box3} className={styles.box} style={{ opacity: isActive('/concept-studio') ? 1 : ''}}
          ></div>
          <div>concept studio</div>
        </Link>

        <Link className={`${styles.col} ${styles.link}`} href="/info">
          <div
            id={styles.box4} className={styles.box} style={{ opacity: isActive('/info') ? 1 : ''}}
          ></div>
          <div>info</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
