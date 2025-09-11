import styles from "./add.page.module.css";
import FormAddTasks from "./components/form-add.jsx";

export default function MainAddPage() {
    

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Add a new task !</h1>
            <FormAddTasks />
        </main>
    )
}