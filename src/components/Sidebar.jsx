import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <figure className={styles.cover}>
        <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </figure>

      <div className={styles.profile}>
        <Avatar src="https://github.com/lucasnemeses.png" />

        <strong>Lucas Meneses</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
