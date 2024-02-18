import logo from "./VirusVisionLogo.png";
import { useNavigate } from "react-router-dom";

function Splash() {
    const navigate = useNavigate();
    return (
        <div className=" flex flex-col justify-center items-center">
            <img className=" w-32 " src={logo} alt="Microscope Logo" />
            <h1 className=" font-bold">Welcome to VirusVision</h1>
            <button
                className=" border-2 border-black p-2 m-2 rounded-lg bg-sky-500 hover:bg-sky-700 text-sky-100 font-bold py-2 px-4"
                onClick={() => navigate("/map")}
            >
                Get Started
            </button>
            <button
                className=" border-2 border-black p-2 m-2 rounded-lg bg-sky-500 hover:bg-sky-700 text-sky-100 font-bold py-2 px-4"
                onClick={() => navigate("/about")}
            >
                About VirusVision
            </button>
        </div>
    );
}

export default Splash;
