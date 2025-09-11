import FormContact from "./components/form-contact.jsx";
import styles from "./contact.page.module.css";

export default function MainContactPage() {
    

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Contact</h1>
            <FormContact />
        </main>
    )
}