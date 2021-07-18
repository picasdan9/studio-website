import { NavButtonProps } from "lib/models";
import Link from "next/link";
import styles from 'styles/Home.module.css'

const NavButton = (props: NavButtonProps) => (
  <div className={styles['navbar-button']}>
    <Link href={props.path}>
      <span>{props.label}</span>
    </Link>
  </div>
);

export default NavButton