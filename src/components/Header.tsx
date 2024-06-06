import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" title='home'>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
      </NavLink>
    </header>
  );
}
