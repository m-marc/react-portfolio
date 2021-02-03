import React from "react";
import s from "./PortfolioItem.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";


const PortfolioItem = props => {
    const {title, desc, img, link} = props
    return (
        <div className={s.wrapper}>
            <div className={s.backgroundImg} style={{backgroundImage: `url(${img})`}}>
                <a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink} /></a>
            </div>
            <h5 className={s.title}>{title}</h5>
            <p className={s.desc}>{desc}</p>
        </div>
    )
}

export default PortfolioItem