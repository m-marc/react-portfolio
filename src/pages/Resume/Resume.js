import React from "react";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ResumeItem from "../../components/ResumeItem/ResumeItem";
import SkillSingle from "../../components/SkillSingle/SkillSingle";
import js from "../../img/javascript.svg"
import ts from "../../img/typescript.svg"
import sass from "../../img/sass.svg"
import react from "../../img/react.svg"
import git from "../../img/git.svg"
import redux from "../../img/redux.svg"

const Resume = () => {
    const experience = {
        jobs: [
            {
                date: "Jun 2017 - Present",
                jobTitle: "Frontend Developer",
                companyName: "Code Art",
                description: "Collaborated with design and project developers to understand project scope and offer elegant, creative and scalable solutions;" +
                    "Converted design assets into React components;" +
                    "Provided timely resolution to reported website problems by integrating new solutions into existing platforms with React/JS."
            },
            {
                date: "Mar 2016 - Dec 2016",
                jobTitle: "Frontend Developer",
                companyName: "OWebSolutions, Tula",
                description: "Applied knowledge of JavaScript and CSS to create successful websites;" +
                    "Used programming capabilities in PHP and JavaScript and other libraries as needed"
            },
            {
                date: "Apr 2015 - Feb 2016",
                jobTitle: "Software Engineer",
                companyName: "SprintSoft, Tula",
                description: "Developed polling system for students in PHP from scratch;" +
                    "Development and customization website of the Institute based on Joomla CMS and Bootstrap framework"
            },
        ],
        edu: [
            {
                date: "Sep 2010 - Jul 2015",
                eduTitle: "Engineer's degree",
            },
        ],
        skills: [
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
    const mappedJobs = experience.jobs.map( (w,i) =>
        <ResumeItem key={`ri-${i}`} date={w.date} job={w.jobTitle} company={w.companyName} desc={w.description}/>)
    const mappedSkills = experience.skills.map( ({title, icon}, i) =>
        <SkillSingle key={`si-${i}`} title={title} icon={icon} />)

    return (
        <div className={`container`}>
            <div className="glass exp-wrapper">
                <div className={"d-flex"}>
                    <span className="resume-icon"><FontAwesomeIcon icon={faBriefcase} size="2x"/></span>
                    <h4>Working experience</h4>
                </div>
                {/*{working experience}*/}
                <div className="resume-wrapper">
                    {mappedJobs}
                </div>
            </div>
            {/*<h2>Skills</h2>*/}
            {/*<div className='skill-wrapper'>*/}
            {/*    {mappedSkills}*/}
            {/*</div>*/}

            {/*{Education}*/}
        </div>
    )
}

export default Resume