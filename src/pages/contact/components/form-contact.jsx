import { useActionState } from "react";
import styles from "./form-contact.module.css";
import { nanoid } from "nanoid";



export default function FormContact() {

    // Gestion formulaire
    function onSubmitForm(prevState, formData) {
        const requiredFields = ["name", "email", "subject", "msg"]

        const data = { userID: nanoid() }

        const errors = {};
        for (const field of requiredFields) {
            const value = formData.get(field);
            data[field] = value;
            if (!value) {
                errors[field] = "This field must be completed.";
            }
        }
        if (Object.keys(errors).length > 0) {
            return { data: null, errors, message: "Invalid data. All fields are required." }
        }

        return { data: data, message: "Your message has been sent successfully.", errors }
    }

    const initialData = { data: null, message: null, errors: {} }
    const [state, handleForm, isPending] = useActionState(onSubmitForm, initialData)

    return (
        <>
            <div className={styles.container_form}>
                <form action={handleForm} className={styles.form}>
                    <div className={styles.container_input}>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" />

                        {/* Error message */}
                        {state.errors.name && (<span className={styles.error_msg}>{state.errors.name}</span>)}
                        {/* ------------- */}
                    </div>

                    <div className={styles.container_input}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" />

                        {/* Error message */}
                        {state.errors.email && (<span className={styles.error_msg}>{state.errors.email}</span>)}
                        {/* ------------- */}
                    </div>

                    <div className={styles.container_input}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" />

                        {/* Error message */}
                        {state.errors.subject && (<span className={styles.error_msg}>{state.errors.subject}</span>)}
                        {/* ------------- */}
                    </div>

                    <div className={styles.container_input}>
                        <label htmlFor="msg">Message</label>
                        <textarea name="msg" id="msg"></textarea>

                        {/* Error message */}
                        {state.errors.msg && (<span className={styles.error_msg}>{state.errors.msg}</span>)}
                        {/* ------------- */}
                    </div>

                    <button className={styles.btn} type="submit">Send Message</button>

                    {/* Error message */}
                    {state.message && (<p className={styles.message}>{state.message}</p>)}
                    {/* ------------- */}
                </form>
            </div>
        </>
    )
}