import { useNavigate } from "react-router-dom";
import logo from "./VirusVisionLogo.png";

function Banner() {
    const navigate = useNavigate();
    return (
        <div className=" flex flex-row bg-sky-900 text-sky-100 p-5 justify-between items-center">
            <img
                src={logo}
                alt="logo"
                className=" w-20 mr-3 cursor-pointer"
                onClick={() => navigate("/")}
            />
            <h1 className=" text-4xl font-bold">VirusVision</h1>
            <button
                className=" border-2 border-black p-2 m-2 rounded-lg bg-sky-500 hover:bg-sky-700 text-sky-100 font-bold py-2 px-4"
                onClick={() => navigate("/about")}
            >
                About
            </button>
        </div>
    );
}

export default Banner;
