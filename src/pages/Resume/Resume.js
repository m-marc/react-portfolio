import React from "react";
import ResumeItem from "../../components/ResumeItem/ResumeItem";

const Resume = () => {
    const experience = {
        jobs: [
            {
                date: "Jun 2017 - Present",
                jobTitle: "Frontend Developer",
                companyName: "Code Art",
                description: "Building stable and maintainable codebase using React;" +
                    "Working directly with client stakeholders to develop technical solutions for business cases;" +
                    "Creating new features, functionality, and capabilities on eCommerce sites using JavaScript, PHP, and SASS"
            },
            {
                date: "Mar 2017 - May 2017",
                jobTitle: "Software Engineer",
                companyName: "SprintSoft, Tula",
                description: "Study and development Retail Modern Point of Sale based on Microsoft Dynamics AX 2012 R3 with C# and TypeScript"
            },
            {
                date: "Mar 2016 - Dec 2016",
                jobTitle: "Frontend Developer",
                companyName: "OWebSolutions, Tula",
                description: "Applied knowledge of JavaScript and CSS to create successful websites;" +
                    "Implementing a mobile-first approach to existing websites;" +
                    "Creating modular, responsive templates using modern CSS techniques and JavaScript libraries"
            },
            {
                date: "Apr 2015 - Feb 2016",
                jobTitle: "Software Engineer",
                companyName: "IPK, Tula",
                description: "Developed polling system for students in PHP from scratch;" +
                    "Development and customization website of the Institute based on Joomla CMS and Bootstrap framework"
            },
        ],
        edu: [
            {
                date: "Sep 2010 - Jul 2015",
                eduTitle: "Engineer's degree",
            },
        ]
    }
    const mappedJobs = experience.jobs.map( (w,i) =>
        <ResumeItem key={`ri-${i}`} date={w.date} job={w.jobTitle} company={w.companyName} desc={w.description}/>)

    return (
        <div className={`container`}>
            <h2>Working experience</h2>
            <div className="glass exp-wrapper">
                <div className="resume-wrapper">
                    {mappedJobs}
                </div>
            </div>
        </div>
    )
}

export default Resume