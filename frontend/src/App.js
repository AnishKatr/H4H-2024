import { BrowserRouter, Routes, Route } from "react-router-dom";
import MicroscopeMapMap from "./Map";
import Banner from "./Banner";
import Main from "./Main";
import Options from "./Options";
import Splash from "./Splash";
import About from "./About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Main />} />
                    <Route path="map" element={<MicroscopeMapMap />} />
                    <Route path="banner" element={<Banner />} />
                    <Route path="options" element={<Options />} />
                    <Route path="splash" element={<Splash />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
