import './styles/App.scss';
import Header from "./components/Header/Header";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./components/Routes/Routes";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Routes />
            </div>
        </BrowserRouter>
    );
}

export default App;
