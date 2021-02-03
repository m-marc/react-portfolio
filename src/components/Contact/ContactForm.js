import s from "./Contact.module.css";
import React, {useState} from "react";

const Form = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
        subject: "",
        formErrors: {email: '', name: '', message: '', subject: ''},
        emailValid: false,
        nameValid: false,
        messageValid: false,
        subjectValid: false,
        formValid: false
    })
    const onSubmitHandle = e => {
        e.preventDefault();
        alert(`Form isn't valid`)
    }
    return (
        <form onSubmit={onSubmitHandle}>
            <div className={s["form-field"]}>
                <label htmlFor="contact-name" className={s.label}>Enter your name*</label>
                <input id="contact-name" type="text" name="name" className={s.input} required value={state.name}/>
            </div>
            <div className={s["form-field"]}>
                <label htmlFor="contact-email" className={s.label}>Enter your email*</label>
                <input id="contact-email" type="email" name="yourEmail" className={s.input} required value={state.email}/>
            </div>
            <div className={s["form-field"]}>
                <label htmlFor="contact-subject" className={s.label}>Enter your subject*</label>
                <input id="contact-subject" type="text" name="yourSubject" className={s.input} required value={state.subject}/>
            </div>
            <div className={s["form-field"]}>
                <label htmlFor="contact-message" className={s.label}>Enter your message*</label>
                <textarea name="yourMsg" id="contact-message" cols="30" rows="6" className={s.textarea} required value={state.message}>

                    </textarea>
            </div>
            <div className={s["form-field"]}>
                <button type="submit" className={s.btn}>Send Mail</button>
            </div>

            <div className={s.alert}>

            </div>
        </form>
    )
}

export default Form;