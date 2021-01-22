import React from "react";
import common from "../../common/styles/container.module.css"
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const Portfolio = () => {
    return (
        <div>
            <div className={common.container}>
                <h2>Portfolio</h2>
                {/*list of projects*/}
                <PortfolioItem title={"Futuredial.com"} link={"https://www.futuredial.com/"}
                               img={"https://www.futuredial.com/wp-content/uploads/2019/10/futuredial-solutions-test-radi.jpg"}
                               desc={"lorem ipsum"}
                />
            </div>
        </div>
    )
}

export default Portfolio