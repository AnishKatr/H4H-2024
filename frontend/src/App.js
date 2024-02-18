import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Splash from "./Splash";
import About from "./About";


function App() {
    return (
        <div className="bg-sky-900 text-sky-100 h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Splash />} />
                        <Route path="map" element={<Main />} />
                        <Route path="about" element={<About />} />
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
