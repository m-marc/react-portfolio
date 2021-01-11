import React from "react";

const Contact = () => {
    return (
        <div>
            <h2>Contact Me</h2>

            <h4>Get in Touch</h4>
            <form action="">
                <input type="text" name="yourName"/>
                <input type="email" name="yourEmail"/>
                <input type="text" name="yourSubject"/>
                <textarea name="yourMsg" id="contactMsg" cols="30" rows="10">&nbsp;</textarea>
            </form>

        </div>
    )
}

export default Contact