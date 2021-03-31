import React, {useState} from "react";
import Nav from "../Nav/Nav";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const menuToggle = () => {setIsVisible(!isVisible)}
    const today = new Date()
    return (
        <header className={`header ${isVisible ? "is-visible" : ''}`}>
            <div className={`header-inner`}>
                <button className="header-toggle" onClick={menuToggle}>
                    {isVisible
                        ? <FontAwesomeIcon icon={faTimes} size="2x" color="white"/>
                        : <FontAwesomeIcon icon={faBars} size="2x" color="white"/>
                    }


                </button>
                <Nav />
            </div>
            {/*copyright*/}
            <p>&copy; {today.getFullYear()}</p>
        </header>
    )
}

export default Header