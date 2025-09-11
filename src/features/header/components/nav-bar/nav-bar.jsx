import { Link } from "react-router";
import styles from "./nav-bar.module.css";

export default function NavBar() {


    return (
        <nav className={styles.container_navbar}>
            <ul className={styles.navbar}>
                <li>
                    <Link to="/" className={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to="/add" className={styles.link}>Add tasks</Link>
                </li>
            </ul>
        </nav>
    )
}