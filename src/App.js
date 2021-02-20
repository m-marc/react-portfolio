import './styles/App.scss';
import Header from "./components/Header/Header";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
  return (
      <BrowserRouter>
          <div className="wrapper">
              <Header />
              <div className={`glass-container`}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/resume" component={Resume} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/contact" component={Contact} />
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
