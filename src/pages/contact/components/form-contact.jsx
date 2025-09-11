import { useActionState } from "react";
import styles from "./form-contact.module.css";
import { nanoid } from "nanoid";



export default function FormContact() {

    // Gestion formulaire
    function onSubmitForm(prevState, formData) {
        const data = {
            userID: nanoid(),
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            msg: formData.get("msg")
        }

        const errors = {};
        if (!data.name) errors.name = "The first name is required.";
        if (!data.email) errors.email = "The email is required.";
        if (!data.subject) errors.subject = "The email is required.";
        if (!data.msg) errors.msg = "The message is required.";
        if (Object.keys(errors).length > 0) {
            return { data: null, errors, message: "Invalid data. All fields are required." }
        }

        return { data: data, message: "Your message has been sent successfully.", errors }
    }

    const initialData = { data: null, message: null, errors: {} }
    const [state, handleform, isPending] = useActionState(onSubmitForm, initialData)

    return (
        <>
            <div className={styles.container_form}>
                <form action={handleform} className={styles.form}>
                    <div className={styles.container_input}>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" />
                        {state.errors.name && (<span className={styles.error_msg}>{state.errors.name}</span>)}
                    </div>
                    <div className={styles.container_input}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" />
                        {state.errors.email && (<span className={styles.error_msg}>{state.errors.email}</span>)}
                    </div>
                    <div className={styles.container_input}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" />
                        {state.errors.subject && (<span className={styles.error_msg}>{state.errors.subject}</span>)}
                    </div>
                    <div className={styles.container_input}>
                        <label htmlFor="msg">Message</label>
                        <textarea name="msg" id="msg"></textarea>
                        {state.errors.msg && (<span className={styles.error_msg}>{state.errors.msg}</span>)}
                    </div>
                    <button className={styles.btn} type="submit">Send Message</button>
                    {state.message && (<p className={styles.message}>{state.message}</p>)}
                </form>
            </div>
        </>
    )
}