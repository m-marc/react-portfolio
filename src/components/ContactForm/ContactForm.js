import React from "react";
import {Formik, Field, Form} from "formik"
import {TextField} from '../TextField/TextField'
import * as yup from 'yup'
import axios from "axios";
import {live} from "../../axios.js";

const validationSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Name is too short!')
        .max(20, 'Name is too long!')
        .required('Name is required'),
    subject: yup.string()
        .min(3, 'Subject is too short!')
        .max(50, 'Subject is too long!')
        .required('Subject is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string()
        .min(3, 'Message is too short!')
        .max(400, 'Message is too long!')
        .required('Message is required')
})


export const ContactForm = () => {

    return <Formik
        initialValues={{
            name: "",
            email: "",
            subject: "",
            message: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, {setSubmitting, resetForm, setStatus}) => {
            setStatus("Sending...")
            try {
                setSubmitting(true)
                await axios.post(live,{data})
                setStatus("Your message was sent successfully")
                setSubmitting(false)
                setTimeout(resetForm, 1000)
            } catch (e) {
                e && setStatus("Network error")
            }
        }}
    >
        {({isSubmitting, status}) => (
            <Form className="contact-form glass">
                <Field placeholder="Enter your name" name="name" type="input" required as={TextField}/>
                <Field placeholder="Enter your email" name="email" type="email" required as={TextField}/>
                <Field placeholder="Enter your subject" name="subject" type="input" required as={TextField}/>
                <Field placeholder="Enter your message" name="message" type="textarea" required cols="30" rows="6" as={TextField}/>
                <div className={`form-status ${status === "Network error" ? 'error' : ''}`}>
                    {status}
                </div>
                <div className={"form-field"}>
                    <button disabled={isSubmitting} type="submit" className={"btn"}>
                        Send Mail
                    </button>
                </div>
            </Form>
        )}
    </Formik>
}