import React from "react";
import github from "../../img/github.svg"
import upwork from "../../img/upwork.svg";
import linkedin from "../../img/linkedin.svg"

const Social = () => {
    return (
        <ul className={`social`}>
            <li className={`social__item`}><a className={'social__link'} href="https://www.upwork.com/freelancers/~01619d2f6f732abf42" rel="noreferrer" target="_blank"><img src={upwork} className={`icon`} alt="upwork"/></a></li>
            <li className={`social__item`}><a className={`social__link`} href="https://www.linkedin.com/in/mmarchenkov/"><img src={linkedin} className={`icon`} alt="linkedin"/></a></li>
            <li className={`social__item`}><a className={`social__link`} href="https://github.com/m-marc" rel="noreferrer" target="_blank"><img src={github} className={`icon`} alt="github"/></a></li>
        </ul>
    )
}

export default Social