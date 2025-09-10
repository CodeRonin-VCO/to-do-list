import LogoComponents from "./components/logo/logo.jsx";
import NavBar from "./components/nav-bar/nav-bar.jsx";
import styles from "./header.module.css";

export default function HeaderPage() {
    

    return (
        <header className={styles.header}>
            <LogoComponents />
            <NavBar />
        </header>
    )
}