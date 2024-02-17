import { BrowserRouter, Routes, Route } from "react-router-dom";
import MicroscopeMapMap from "./Map";
import Banner from "./Banner";
import Main from "./Main";
import Splash from "./Splash";
import About from "./About";

function App() {
    return (
        <div className="bg-sky-950 min-h-screen text-sky-100">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Main />} />
                        <Route path="map" element={<MicroscopeMapMap />} />
                        <Route path="banner" element={<Banner />} />
                        <Route path="splash" element={<Splash />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
