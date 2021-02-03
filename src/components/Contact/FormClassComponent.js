import React, { Component } from 'react';
import s from "./Contact.module.css";

class FormClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }

    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {this.validateField(name, value)})
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let messageValid = this.state.messageValid;
        let subjectValid = this.state.subjectValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length >= 3;
                fieldValidationErrors.name = nameValid ? '' : ' is invalid';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'message':
                messageValid = value.length >= 3;
                fieldValidationErrors.name = messageValid ? '' : ' is invalid';
                break;
            case 'subject':
                subjectValid = value.length >= 3;
                fieldValidationErrors.name = subjectValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            messageValid: messageValid,
            subjectValid: subjectValid
        }, this.validateForm)
    }
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.messageValid && this.state.subjectValid});
    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <form>
                <div className={s["form-field"]}>
                    <label htmlFor="contact-name" className={s.label}>Enter your name*</label>
                    <input id="contact-name" type="text" name="name" className={s.input} required value={this.state.name} onChange={this.handleUserInput}/>
                </div>
                <div className={s["form-field"]}>
                    <label htmlFor="contact-email" className={s.label}>Enter your email*</label>
                    <input id="contact-email" type="email" name="yourEmail" className={s.input} required value={this.state.email} onChange={this.handleUserInput}/>
                </div>
                <div className={s["form-field"]}>
                    <label htmlFor="contact-subject" className={s.label}>Enter your subject*</label>
                    <input id="contact-subject" type="text" name="yourSubject" className={s.input} required value={this.state.subject} onChange={this.handleUserInput}/>
                </div>
                <div className={s["form-field"]}>
                    <label htmlFor="contact-message" className={s.label}>Enter your message*</label>
                    <textarea name="yourMsg" id="contact-message" cols="30" rows="6" className={s.textarea} required value={this.state.message} onChange={this.handleUserInput}>

                    </textarea>
                </div>
                <div className={s["form-field"]}>
                    <button type="submit" className={s.btn} disabled={!this.state.formValid}>Send Mail</button>
                </div>

                <div className={s.alert}>
                    {Object.keys(this.state.formErrors).map((fieldName, i) => {
                        if(this.state.formErrors[fieldName].length > 0){
                            return (
                                <p key={i}>{fieldName} {this.state.formErrors[fieldName]}</p>
                            )
                        } else {
                            return '';
                        }
                    })}
                </div>
            </form>
        )
    }
}

export default FormClassComponent