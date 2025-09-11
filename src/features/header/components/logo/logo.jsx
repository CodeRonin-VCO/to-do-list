import styles from "./logo.module.css";
import logo from "./../../../../assets/logo-remindme.png";

export default function LogoComponents() {
    

    return (
        <div className={styles.logo}>
            <img src={logo} alt="logo" className={styles.logo_img}/>
        </div>
    )
}