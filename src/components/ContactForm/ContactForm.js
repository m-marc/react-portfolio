import s from "../../pages/Contact/Contact.module.css";
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
            <Form>
                <Field label={"Enter your name *"} name="name" type="input" required as={TextField}/>
                {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                <Field label="Enter your email *" name="email" type="input" required as={TextField}/>
                {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                <Field label="Enter your subject *" name="subject" type="input" required as={TextField}/>
                {errors.subject && touched.subject ? (<div>{errors.subject}</div>) : null}
                <Field label="Enter your message *" name="message" type="textarea" required cols="30" rows="6" as={TextField}/>
                {errors.message && touched.message ? (<div>{errors.message}</div>) : null}
                <div className={s["form-field"]}>
                    <button disabled={isSubmitting} type="submit" className={s.btn}>
                        Send Mail
                    </button>
                </div>
            </Form>
        )}
    </Formik>
}