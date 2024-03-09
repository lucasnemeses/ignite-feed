import igniteLogo from '../assets/ignite-logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <img src={igniteLogo} alt="logo do ignite" />
      </figure>
    </header>
  );
}
