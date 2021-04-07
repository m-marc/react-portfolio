import React from "react";
import {NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <nav className={"nav"}>
            <NavLink to="/" className={"nav-link"} exact activeClassName={"nav-link--active"}>
                <span>Home</span>
            </NavLink>
            <NavLink to="/experience" className={"nav-link"} activeClassName={"nav-link--active"}>
                <span>Experience</span>
            </NavLink>
            <NavLink to="/projects" className={"nav-link"} activeClassName={"nav-link--active"}>
                <span>Projects</span>
            </NavLink>
            <NavLink to="/contact" className={"nav-link"} activeClassName={"nav-link--active"}>
                <span>Contact</span>
            </NavLink>
        </nav>
    )
}

export default Nav