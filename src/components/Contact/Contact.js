import React, {useState} from "react";
import common from "../../common/styles/container.module.css"
import s from "./Contact.module.css"
import Form from "./ContactForm";

const Contact = () => {
    return (
        <div className={common.container}>
            <h2>Contact Me</h2>
            <div className={s.wrapper}>
                <div className={s["col-6"]}>
                    <Form />
                </div>
                <div className={s["col-6"]}>
                    <div className={s["contact-info"]}>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact