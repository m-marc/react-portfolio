import React from "react";
import Social from "../Social/Social";
import s from "./Home.module.css";

const Home = () => {
    return (
        <div className={`${s.home}`}>
            <div className={`container d-flex-col`}>
                <h1>Hi, I am <strong className={"color-theme"}>Max Marchenkov</strong></h1>
                <p>A frontend developer.</p>
                <Social />
            </div>
        </div>
    )
}

export default Home