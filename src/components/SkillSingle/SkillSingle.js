import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./SkillSingle.module.css"


const SkillSingle = ({icon, title}) => {
    return <div className={s.card}>
        <div className={s.icon}>
            <FontAwesomeIcon icon={icon} size="2x"/>
        </div>
        <h3 className={s.title}>{title}</h3>
    </div>
}

export default SkillSingle