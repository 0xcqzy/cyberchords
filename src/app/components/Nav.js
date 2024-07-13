import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link className={styles.link} href="/">Art</Link>
        <Link className={styles.link} href="/commercial">Commercial</Link>
      </div>
      <div className={styles.right}>
        <Link className={styles.link} href="/concept-studio">Concept Studio</Link>
        <Link className={styles.link} href="/info">Info</Link>
      </div>
    </nav>
  );
};

export default Nav;
