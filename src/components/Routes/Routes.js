import React from "react";
import {Route} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Resume from "../../pages/Resume/Resume";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import {useRouteMatch} from "react-router";

export const Routes = () => {
    const match = useRouteMatch("/")
    const wrapperClass = match.isExact ? 'home' : ''
    return <main className={`wrapper__main ${wrapperClass}`}>
        <Route exact path="/" component={Home}/>
        <Route path="/experience" component={Resume} />
        <Route path="/projects" component={Portfolio} />
        {/*<Route path="/blog" component={Blog} />*/}
        <Route path="/contact" component={Contact} />
    </main>
}