import {Routes, Route } from "react-router-dom";

import './index.css';
import Homepage from "./components/Homepage.tsx";
import InformatikPage from "./components/InformatikPage.tsx";
import Navbar from "./components/Navbar.tsx";

const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/informatik" element={<InformatikPage />} />
            </Routes>
        </>
    );
};

export default App;