import React from "react";
import {useField} from "formik";

export const TextField = ({form, ...props}) => {
    const [field, meta] = useField(props);
    return <div className={"form-field"}>
        {props.type === 'textarea'
            ? <textarea className={"textarea"} {...field} {...props}> </textarea>
            : <input className={"input"} {...field} {...props}/>}
        <span className={"form-field-error"}>{meta.error && meta.touched ? meta.error : null}</span>
    </div>
}