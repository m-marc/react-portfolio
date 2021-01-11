import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/">
                <span>Home</span>
            </NavLink>
            <NavLink to="/resume">
                <span>Resume</span>
            </NavLink>
            <NavLink to="/portfolio">
                <span>Portfolio</span>
            </NavLink>
            <NavLink to="/blog">
                <span>Blog</span>
            </NavLink>
            <NavLink to="/contact">
                <span>Contact</span>
            </NavLink>
        </nav>
    )
}

export default Nav