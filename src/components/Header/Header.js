import React from "react";
import s from "./Header.module.css"
import Nav from "../Nav/Nav";

const Header = () => {
    const today = new Date()
    return (
        <header className={s.header}>
            {/*logo container*/}
            <><a href=""><img src="" alt=""/></a></>
            <Nav />
            {/*copyright*/}
            <><p>&copy; {today.getFullYear()}</p></>
        </header>
    )
}

export default Header