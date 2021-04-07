import React from "react";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

const Portfolio = () => {
    return (
        <div>
            <div className={`glass-container container`}>
                <h2>Projects</h2>
                <div className={`row`}>
                    <PortfolioItem
                        title={"Music player"}
                        link={"#"}
                        desc={"Simple music player"}
                        stack={"React, TS, Redux, MaterialUI"}
                    />
                    <PortfolioItem
                        title={"Study cards"}
                        link={"#"}
                        desc={"Team pet-project"}
                        stack={"React, TS, Redux"}
                    />
                    <PortfolioItem
                        title={"Todolist"}
                        link={"#"}
                        desc={"Simple todolist pet-project"}
                        stack={"React, TS, Redux, MaterialUI, Storybook, RestAPI"}
                    />
                    <PortfolioItem
                        title={"Nanz Product cart"}
                        link={"#"}
                        desc={"Custom product cart on React"}
                        stack={"React, TS, Redux"}
                    />
                    <PortfolioItem
                        title={"Chat template"}
                        link={"#"}
                        desc={"PSD to HTML"}
                        stack={"HTML, SCSS"}
                    />
                    <PortfolioItem
                        title={"FutureDial"}
                        link={"https://www.futuredial.com/"}
                        desc={"PSD to WordPress"}
                        stack={"JS, PHP, SCSS, Bootstrap, WordPress"}
                    />
                    <PortfolioItem
                        title={"Cards for Causes"}
                        link={"https://www.cardsforcauses.com/"}
                        desc={"PSD to BigCommerce"}
                        stack={"React, JS, PHP, SCSS, Bootstrap, BigCommerce"}
                    />
                    <PortfolioItem
                        title={"Rent My Florida"}
                        link={"http://rentmyflorida.com/"}
                        desc={"PSD to WordPress"}
                        stack={"VueJS, RestAPI, PHP, JS, SCSS, Bootstrap, WordPress"}
                    />
                    <PortfolioItem
                        title={"OM Digital"}
                        link={"https://omdigital.com/"}
                        desc={"PSD to WordPress"}
                        stack={"JS, PHP, SCSS, Bootstrap, WordPress"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Portfolio