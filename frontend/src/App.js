import { BrowserRouter, Routes, Route } from "react-router-dom";
import MicroscopeMap from "./Map";
import Banner from "./Banner";
import Main from "./Main";
import Options from "./Options";
import Splash from "./Splash";
import About from "./About";

function App() {
    return (
        <div className="bg-sky-900 text-sky-100">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Main />} />
                        <Route path="map" element={<MicroscopeMap />} />
                        <Route path="banner" element={<Banner />} />
                        <Route path="options" element={<Options />} />
                        <Route path="splash" element={<Splash />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
