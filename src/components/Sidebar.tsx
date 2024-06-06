import { AndroidLogo } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';
import Cover from '../assets/cover.jpg'
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={Cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/castrogusttavo.png" />

        <strong>Gusttavo Castro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <NavLink to="/perfil" title="Perfil">
          <AndroidLogo size={24} />
          Veja meu perfil
        </NavLink>
      </footer>
    </aside>
  );
}
