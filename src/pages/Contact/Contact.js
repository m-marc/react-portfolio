import React from "react";
import {ContactForm} from "../../components/ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className={`container`}>
            <h2>Contact Me</h2>
            <div className={`flex-between row`}>
                <div className={"col-6"}>
                    <ContactForm />
                </div>
                <div className={"col-6"}>
                    <div className={"contact-info"}>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact