import {Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.tsx";
import Unternehmen from "./components/Unternehmen.tsx";
import Kontakt from "./components/Kontakt.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Homepage/Footer.tsx";
import Branchen from "./components/Branchen.tsx";
import Leistungen from "./components/Leistungen.tsx";
import Projektberichte from "./components/Projektberichte.tsx";
import Karriere from "./components/Karriere.tsx";
import FitImJob from "./components/FitImJob.tsx";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/Unternehmen" element={<Unternehmen/>} />
                <Route path="/Kontakt" element={<Kontakt/>} />
                <Route path="/Home" element={<Homepage/>} />
                <Route path="/Branchen" element={<Branchen/>} />
                <Route path="/Leistungen" element={<Leistungen/>} />
                <Route path="/Projektberichte" element={<Projektberichte/>} />
                <Route path="/Karriere" element={<Karriere/>} />
                <Route path="/FitImJob" element={<FitImJob/>} />

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;