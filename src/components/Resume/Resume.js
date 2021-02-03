import React from "react";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import common from "../../common/styles/container.module.css";
import s from "./Resume.module.css";
import ResumeItem from "../ResumeItem/ResumeItem";
import SkillSingle from "../SkillSingle/SkillSingle";
import {faCss3Alt, faHtml5, faJs, faReact, faSass} from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
    const experience = {
        jobs: [
            {
                date: "Jun 2017 - Present",
                jobTitle: "Frontend Developer",
                companyName: "CodeArt",
                description: "Lorem ipsum"
            },
            {
                date: "Mar 2016 - Dec 2016",
                jobTitle: "Frontend Developer",
                description: "Lorem ipsum"
            },
            {
                date: "Apr 2015 - Feb 2016",
                jobTitle: "Software Engineer",
                description: "Lorem ipsum"
            },
        ],
        skills: [
            {
                title: 'html',
                icon: faHtml5,
            },
            {
                title: 'css',
                icon: faCss3Alt
            },
            {
                title: 'js',
                icon: faJs
            },
            {
                title: 'react',
                icon: faReact
            },
            {
                title: 'sass',
                icon: faSass
            },
            {
                title: 'TS',
                icon: ""
            }
        ]
    }
    const mappedJobs = experience.jobs.map( (w,i) => <ResumeItem key={`ri-${i}`} date={w.date} job={w.jobTitle} company={w.companyName} desc={w.description}/>)
    const mappedSkills = experience.skills.map( ({title, icon}, i) => <SkillSingle key={`si-${i}`} title={title} icon={icon} />)

    return (
        <div className={`${common.container}`}>
            <h2>My skills</h2>
            <div className={s.skillWrapper}>
                {mappedSkills}
            </div>

            <h2>Resume</h2>
            <div className={common["d-flex"]}>
                <span className={s.icon}><FontAwesomeIcon icon={faBriefcase} size="2x"/></span>
                <h4>Working experience</h4>
            </div>
            {/*{working experience}*/}
            <div className={s.resumeWrapper}>
                {mappedJobs}
            </div>
            {/*{Education}*/}
        </div>
    )
}

export default Resume