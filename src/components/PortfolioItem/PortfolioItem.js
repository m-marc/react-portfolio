import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";


const PortfolioItem = props => {
    const {title, desc, stack, link} = props
    return (
        <div className="portfolio__wrapper">
            <div className="portfolio__img">
                <a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink} /></a>
            </div>
            <div className="glass portfolio__content">
                <h5 className="item-title">{title}</h5>
                <p className={"item-desc"}>{desc}</p>
                <p className="item-stack">{stack}</p>
            </div>
        </div>
    )
}

export default PortfolioItem