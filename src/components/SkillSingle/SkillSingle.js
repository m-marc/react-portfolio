import React from "react";

const SkillSingle = ({icon, title}) => {
    return <div className={`skill-col`}>
        <div className='skill-card glass glass__dark'>
            <div className='skill__icon'>
                <img src={icon} alt={title}/>
            </div>
            <h3 className="skill__title">{title}</h3>
        </div>
    </div>
}

export default SkillSingle