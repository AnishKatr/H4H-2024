import logo from "./VirusVisionLogo.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

function Splash() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [searchOptions, setSearchOptions] = useState([]);
    const [searchCoords, setSearchCoords] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const handleSearch = (address) => {
        if (!isOptionSelected) {
            fetch(
                "https://nominatim.openstreetmap.org/search?format=json&q=" +
                    address
            )
                .then((response) => response.json())
                .then((data) => {
                    setSearchOptions(data);
                    setIsOpen(true);
                });
        } else {
            setIsOptionSelected(false);
        }
    };

    const debouncedSearch = debounce(handleSearch, 300);

    useEffect(() => {
        if (search.length > 2) {
            debouncedSearch(search);
        }
    }, [search]);

    const handleSelectOption = (option) => {
        setSearch(option);
        setIsOptionSelected(true);
        setIsOpen(false);
    };

    return (
        <div className=" slide-up flex flex-col justify-between items-center h-1/2">
            <img className=" w-40 m-10" src={logo} alt="Microscope Logo" />
            <h1 className=" font-bold text-3xl">Welcome to VirusVision</h1>
            <h2 className=" text-2xl mt-5">
                Need to know where diseases are spreading? We've got your back.
            </h2>
            <input
                className=" w-1/2 border-2 border-black p-2 m-2 rounded-lg text-black"
                type="text"
                value={search}
                placeholder="Search for a location"
                onChange={(e) => setSearch(e.target.value)}
            />
            {isOpen && (
                <div className="p-5 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {searchOptions.map((option, index) => (
                        <div
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                            key={index}
                            onClick={() => {
                                handleSelectOption(option.display_name);
                                setSearchCoords([option.lat, option.lon]);
                            }}
                        >
                            {option.display_name}
                        </div>
                    ))}
                </div>
            )}
            <div className="flex flex-row">
                <button
                    className=" border-2 border-black p-2 m-2 rounded-lg bg-sky-500 hover:bg-sky-700 text-sky-100 font-bold py-2 px-4"
                    onClick={() =>
                        navigate(
                            `/map?start=${searchCoords[0]},${searchCoords[1]}`
                        )
                    }
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
        </div>
    );
}

export default Splash;
