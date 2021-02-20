import React from "react";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import common from "../../common/styles/container.module.css";
import s from "./Resume.module.css";
import ResumeItem from "../ResumeItem/ResumeItem";
import SkillSingle from "../SkillSingle/SkillSingle";
import html from "../../common/img/html.svg"
import css from "../../common/img/css3.svg"
import js from "../../common/img/javascript.svg"
import ts from "../../common/img/typescript.svg"
import sass from "../../common/img/sass.svg"
import react from "../../common/img/react.svg"
import git from "../../common/img/git.svg"
import redux from "../../common/img/redux.svg"

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
                icon: html,
            },
            {
                title: 'css',
                icon: css
            },
            {
                title: 'sass',
                icon: sass
            },
            {
                title: 'js',
                icon: js
            },
            {
                title: 'TS',
                icon: ts
            },
            {
                title: 'react',
                icon: react
            },
            {
                title: 'Redux',
                icon: redux
            },
            {
                title: 'Git',
                icon: git
            }
        ]
    }
    const mappedJobs = experience.jobs.map( (w,i) => <ResumeItem key={`ri-${i}`} date={w.date} job={w.jobTitle} company={w.companyName} desc={w.description}/>)
    const mappedSkills = experience.skills.map( ({title, icon}, i) => <SkillSingle key={`si-${i}`} title={title} icon={icon} />)

    return (
        <div className={`container`}>
            <h2>Skills</h2>
            <div className='skill-wrapper'>
                {mappedSkills}
            </div>

            <h2>Resume</h2>
            <div className={"d-flex"}>
                <span className="resume-icon"><FontAwesomeIcon icon={faBriefcase} size="2x"/></span>
                <h4>Working experience</h4>
            </div>
            {/*{working experience}*/}
            <div className="resume-wrapper">
                {mappedJobs}
            </div>
            {/*{Education}*/}
        </div>
    )
}

export default Resume