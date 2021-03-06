import React from "react";
import Social from "../../components/Social/Social";
import me from "../../img/avatar_3.jpg";
import TypingEffect from "react-typing-effect";

const Home = () => {
    return (
        <div className={`container`}>
            <div className={`d-flex-col home_col glass`}>
                <img src={me} alt="this is me" width={150} className="avatar"/>
                <h1><strong className={"color-theme"}>Max Marchenkov</strong></h1>
                <TypingEffect
                    className={"typing-text"}
                    text={["I'm a Front-End developer."]}
                    speed={200}
                    typingDelay={700}/>
                <Social />
            </div>
        </div>
    )
}

export default Home