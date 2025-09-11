import styles from "./form-add.module.css";

export default function FormAddTasks() {
    

    return (
        <div className={styles.container_form}>
            <form action="" className={styles.form}>
                <div className={styles.container_input}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div className={styles.container_input}>
                    <label htmlFor="theme">Theme:</label>
                    <input type="text" id="theme" name="theme" />
                </div>
                <div className={styles.container_input}>
                    <label htmlFor="desc">Description:</label>
                    <textarea name="desc" id="desc"></textarea>
                </div>
                <div className={styles.container_input}>
                    <label htmlFor="date">Date:</label>
                    <input type="datetime-local" id="date" name="date" />
                </div>
                <div className={styles.container_input}>
                    <label htmlFor="prior">Priority:</label>
                    <select name="prior" id="prior">
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className={styles.container_input}>
                    <label htmlFor="file" className={styles.custom_file_upload}>Upload file : Browse 📎</label>
                    <input type="file" id="file" name="file" />
                </div>
                <button className={styles.btn} type="submit">Add new task</button>
            </form>
        </div>
    )
}