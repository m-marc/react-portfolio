import React from "react";
import Social from "../Social/Social";
import common from "../../common/styles/container.module.css";
import s from "./Home.module.css";

const Home = () => {
    return (
        <div className={s.home}>
            <div className={`${common.container} ${common["d-flex-col"]}`}>
                <h1>Hi, I am <strong className={common["color-theme"]}>Max Marchenkov</strong></h1>
                <p>A frontend developer.</p>
                <Social />
            </div>
        </div>
    )
}

export default Home