import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import portfolio from "./Portfolio.module.css"

const Portfolio = () => {
    return (
        <div>
            <div className={`glass-container container`}>
                <h2>Portfolio</h2>
                {/*list of projects*/}
                <div className={portfolio.wrapper}>
                    <PortfolioItem
                        title={"Futuredial.com"}
                        link={"https://www.futuredial.com/"}
                        img={"https://www.futuredial.com/wp-content/uploads/2019/10/futuredial-solutions-test-radi.jpg"}
                        desc={"lorem ipsum"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Portfolio