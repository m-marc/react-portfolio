import React from "react";

const ResumeItem = ({date, company, desc, job}) => {

    return (
        <div className='resume-single'>
            <div className='summary'>
                <h6 className="year">{date}</h6>
            </div>
            <div className="details">
                <h5>{job}</h5>
                <h6 className="company">{company}</h6>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ResumeItem