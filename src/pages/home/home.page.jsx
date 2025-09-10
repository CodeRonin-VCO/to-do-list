import styles from "./home.page.module.css";

export default function MainHomePage() {
    

    return (
        <main className={styles.main}>
            <aside className={styles.lateral_menu}>
                <h4 className={styles.title_sm}>Filter tasks :</h4>
                <div className={styles.btn_container}>
                    <button className={styles.btn + " " + styles.active}>All tasks</button>
                    <button className={styles.btn}>Active</button>
                    <button className={styles.btn}>Completed</button>
                </div>
            </aside>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2>Here is all my content</h2>
                </div>
            </div>
        </main>
    )
}