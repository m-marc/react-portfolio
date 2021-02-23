import React from "react";
import {Formik, Field, Form} from "formik"
import {TextField} from '../TextField/TextField'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Too short!')
        .max(20, 'Too long!')
        .required('Required'),
    subject: yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    message: yup.string()
        .min(3, 'Too short!')
        .max(400, 'Too long!')
        .required('Required')
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
        onSubmit={(data, {setSubmitting, resetForm}) => {
            setSubmitting(true);
            //async stuff here
            console.log(data)
            setSubmitting(false)
            resetForm()
        }}
    >
        {({values, isSubmitting, errors, touched}) => (
            <Form className="contact-form glass">
                <Field placeholder={"Enter your name"} name="name" type="input" required as={TextField}/>
                <Field placeholder="Enter your email" name="email" type="input" required as={TextField}/>
                <Field placeholder="Enter your subject" name="subject" type="input" required as={TextField}/>
                <Field placeholder="Enter your message" name="message" type="textarea" required cols="30" rows="6" as={TextField}/>
                <div className="form-errors">
                    {Object.keys(errors).length > 0 ? `Some error happened`: null}
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