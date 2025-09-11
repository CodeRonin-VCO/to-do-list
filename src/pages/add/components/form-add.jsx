import { useActionState } from "react";
import styles from "./form-add.module.css";
import { nanoid } from "nanoid";

export default function FormAddTasks() {
    function onSubmitForm(prevState, formData) {
        const requiredFields = ["title", "theme", "desc", "date"];
        const data = { userID: nanoid(), file: formData.get("file"), status: "active" }

        const errors = {};

        for (const field of requiredFields) {
            // Get data
            const value = formData.get(field);
            data[field] = value;

            // Add errors
            if (!value) {
                errors[field] = "This field must be completed.";
            }
        }

        if (Object.keys(errors).length > 0) {
            return { data: null, errors, message: "Invalid data. All fields are required." }
        }

        // LocalStorage
        const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = [...existingTasks, data];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        return { data: data, message: "Your message has been sent successfully.", errors }
    }

    const initialData = { data: null, message: null, errors: {} }
    const [state, handleForm, isPending] = useActionState(onSubmitForm, initialData)

    return (
        <div className={styles.container_form}>
            <form action={handleForm} className={styles.form}>
                <div className={styles.container_input}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" />

                    {/* Error message */}
                    {state.errors.title && (<span className={styles.error_msg}>{state.errors.title}</span>)}
                    {/* ------------- */}
                </div>

                <div className={styles.container_input}>
                    <label htmlFor="theme">Theme:</label>
                    <input type="text" id="theme" name="theme" />

                    {/* Error message */}
                    {state.errors.theme && (<span className={styles.error_msg}>{state.errors.theme}</span>)}
                    {/* ------------- */}
                </div>

                <div className={styles.container_input}>
                    <label htmlFor="desc">Description:</label>
                    <textarea name="desc" id="desc"></textarea>

                    {/* Error message */}
                    {state.errors.desc && (<span className={styles.error_msg}>{state.errors.desc}</span>)}
                    {/* ------------- */}
                </div>

                <div className={styles.container_input}>
                    <label htmlFor="date">Date:</label>
                    <input type="datetime-local" id="date" name="date" />

                    {/* Error message */}
                    {state.errors.date && (<span className={styles.error_msg}>{state.errors.date}</span>)}
                    {/* ------------- */}
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

                {/* Error message */}
                {state.message && (<p className={styles.message}>{state.message}</p>)}
                {/* ------------- */}
            </form>
        </div>
    )
}