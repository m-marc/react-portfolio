import React from "react";
import s from "../../pages/Contact/Contact.module.css";

export const TextField = ({field, form, ...props}) => {
    return <div className={s["form-field"]}>
        <label htmlFor="name" className={s.label}>{props.label}</label>
        {props.type === 'textarea'
            ? <textarea className={s.textarea} {...field} {...props}> </textarea>
            : <input className={s.input} {...field} {...props}/>}
    </div>
}