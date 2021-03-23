import React from "react";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

const Portfolio = () => {
    return (
        <div>
            <div className={`glass-container container`}>
                <h2>Projects</h2>
                <div className={`d-flex`}>
                    <PortfolioItem
                        title={"Music player"}
                        link={"#"}
                        desc={"lorem ipsum"}
                    />
                    <PortfolioItem
                        title={"Study cards"}
                        link={"#"}
                        desc={"lorem ipsum"}
                    />
                    <PortfolioItem
                        title={"Todolist"}
                        link={"#"}
                        desc={"lorem ipsum"}
                    />
                    <PortfolioItem
                        title={"Nanz Product cart"}
                        link={"#"}
                        desc={"lorem ipsum"}
                    />
                    <PortfolioItem
                        title={"Chat template"}
                        link={"#"}
                        desc={"lorem ipsum"}
                    />
                    <PortfolioItem
                        title={"FutureDial"}
                        link={"https://www.futuredial.com/"}
                        desc={"lorem ipsum"}
                    />
                    <PortfolioItem
                        title={"Cards for Causes"}
                        link={"https://www.cardsforcauses.com/"}
                        desc={"lorem ipsum"}
                    />
                    <PortfolioItem
                        title={"Rent My Florida"}
                        link={"http://rentmyflorida.com/"}
                        desc={"lorem ipsum"}
                    />
                    <PortfolioItem
                        title={"OM Digital"}
                        link={"https://omdigital.com/"}
                        desc={"lorem ipsum"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Portfolio