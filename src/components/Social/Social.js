import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import upwork from "../../common/img/upwork.svg";
import codewars from "../../common/img/codewars.svg"
import s from "./Social.module.css";

const Social = () => {
    return (
        <ul className={s.socialList}>
            <li><a href="https://www.upwork.com/freelancers/~01619d2f6f732abf42" rel="noreferrer" target="_blank"><img src={upwork} className={s.icon} alt="upwork"/></a></li>
            <li><a href="https://www.codewars.com/users/M.Marc" rel="noreferrer" target="_blank"><img src={codewars} alt="codewars"/></a></li>
            <li><a href="https://github.com/m-marc" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
        </ul>
    )
}

export default Social