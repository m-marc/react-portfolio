import './styles/App.scss';
import Header from "./components/Header/Header";
import React from "react";
import {HashRouter} from "react-router-dom";
import {Routes} from "./components/Routes/Routes";
import Particles from "react-particles-js";

const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "move": {
            "speed": 1
        },
    }
}

function App() {
    return (
        <HashRouter>
            <Particles className="particles" params={particlesOpt}/>
            <div className="wrapper">
                <Header />
                <Routes />
            </div>
        </HashRouter>
    );
}

export default App;
