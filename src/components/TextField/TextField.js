import React from "react";

export const TextField = ({field, form, ...props}) => {
    return <div className={"form-field"}>
        {props.type === 'textarea'
            ? <textarea className={"textarea"} {...field} {...props}> </textarea>
            : <input className={"input"} {...field} {...props}/>}
    </div>
}