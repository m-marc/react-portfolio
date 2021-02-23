import React from "react";
import Social from "../../components/Social/Social";

const Home = () => {
    return (
        <div className={`container`}>
            <div className={`d-flex-col home_col glass glass__dark`}>
                <h1>Hi, I am <strong className={"color-theme"}>Max Marchenkov</strong></h1>
                <p>A frontend developer.</p>
                <Social />
            </div>
        </div>
    )
}

export default Home