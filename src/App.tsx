import React from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import People from "./components/People/People";
import PersonPage from "./components/PersonPage/PersonPage";


function App() {

    return (
        <div className="main container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<People />} />
                    <Route path="/people/:personName" element={<PersonPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
