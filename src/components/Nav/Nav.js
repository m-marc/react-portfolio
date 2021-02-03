import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/" className={s.link} exact activeClassName={s.active}>
                <span>Home</span>
            </NavLink>
            <NavLink to="/resume" className={s.link} activeClassName={s.active}>
                <span>Resume</span>
            </NavLink>
            <NavLink to="/portfolio" className={s.link} activeClassName={s.active}>
                <span>Portfolio</span>
            </NavLink>
            <NavLink to="/blog" className={s.link} activeClassName={s.active}>
                <span>Blog</span>
            </NavLink>
            <NavLink to="/contact" className={s.link} activeClassName={s.active}>
                <span>Contact</span>
            </NavLink>
        </nav>
    )
}

export default Nav