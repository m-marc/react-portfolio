import './styles/App.scss';
import Header from "./components/Header/Header";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

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
