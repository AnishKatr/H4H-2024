import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Splash from "./Splash";
import About from "./About";
import News from "./News";

function App() {
    return (
        <div className="text-sky-100 min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Splash />} />
                        <Route path="map" element={<Main />} />
                        <Route path="about" element={<About />} />
                        <Route path="news" element={<News />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
