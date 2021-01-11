import React from "react";
import Social from "../Social/Social";
import style from "../../common/styles/container.module.css";
import s from "./Home.module.css";

const Home = () => {
    return (
        <div className={s.home}>
            <div className={`${style.container} ${style.dFlex}`}>
                <h1>Hi, I am <strong>Max Marchenkov</strong></h1>
                <p>I am frontend react developer.</p>
                <Social />
            </div>
        </div>
    )
}

export default Home