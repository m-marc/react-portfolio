import React from "react";
import s from "./ResumeItem.module.css";

const ResumeItem = ({date, company, desc, job}) => {

    return (
        <div className={s.resume}>
            <div className={s.summary}>
                <h6 className={s.year}>{date}</h6>
            </div>
            <div className={s.details}>
                <h5>{job}</h5>
                <h6 className={s.company}>{company}</h6>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ResumeItem