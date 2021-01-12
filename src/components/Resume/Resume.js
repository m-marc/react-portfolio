import React from "react";
import {faSuitcase, faUniversity} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from "../../common/styles/container.module.css";
import s from "./Resume.module.css";
import ResumeItem from "../ResumeItem/ResumeItem";

const Resume = () => {
    const experience = {
        work: [
            {
                date: "2017 - Present",
                jobTitle: "Wordpress Developer",
                companyName: "CodeArt",
                description: "Lorem ipsum"
            }
        ]
    }
    const mappedWork = experience.work.map( w => <ResumeItem date={w.date} job={w.jobTitle} company={w.companyName} desc={w.description}/>)
    return (
        <div className={`${style.container}`}>
            <h2>My skills</h2>
            {/*{list of skills}*/}
            <h2>Resume</h2>

            <div><FontAwesomeIcon icon={faSuitcase} size="2x"/><h4>Working experience</h4></div>
            {/*{working experience}*/}
            <div className={s.resumeWrapper}>
                {mappedWork}
            </div>

            <div><FontAwesomeIcon icon={faUniversity} size="2x"/><h4>Education</h4></div>
            {/*{Education}*/}
        </div>
    )
}

export default Resume