import React from "react";

const SkillSingle = ({icon, title}) => {
    return <div className='skill-card glass-container'>
        <div className='skill__icon'>
            <img src={icon} alt={title}/>
        </div>
        <h3 className="skill__title">{title}</h3>
    </div>
}

export default SkillSingle