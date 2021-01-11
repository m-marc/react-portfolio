import React from "react";
import {faSuitcase, faUniversity} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from "../../common/styles/container.module.css";

const Resume = () => {
    return (
        <div className={`${style.container}`}>
            <h2>My skills</h2>
            {/*{list of skills}*/}
            <h2>Resume</h2>

            <div><FontAwesomeIcon icon={faSuitcase} size="2x"/><h4>Working experience</h4></div>
            {/*{working experience}*/}

            <div><FontAwesomeIcon icon={faUniversity} size="2x"/><h4>Education</h4></div>
            {/*{Education}*/}
        </div>
    )
}

export default Resume