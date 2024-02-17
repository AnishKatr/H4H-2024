import { BrowserRouter, Routes, Route } from "react-router-dom";
import MicroscopeMapMap from "./Map";
import Banner from "./Banner";
import Main from "./Main";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Main />} />
                    <Route path="map" element={<MicroscopeMapMap />} />
                    <Route path="banner" element={<Banner />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

