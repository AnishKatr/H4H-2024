import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Control({ setHeight, setColor, setRadius }) {
    const [isHeightOpen, setIsHeightOpen] = useState(false);
    const [isHeatmapOpen, setIsHeatmapOpen] = useState(false);

    const toggleHeightDropdown = () => {
        setIsHeightOpen(!isHeightOpen);
    };
    const toggleHeatmapDropdown = () => {
        setIsHeatmapOpen(!isHeatmapOpen);
    };

    const handleHeightItemClick = (item) => {
        setHeight(item);
        setIsHeightOpen(false);
    };
    const handleHeatmapItemClick = (item) => {
        setColor(item);
        setIsHeatmapOpen(false);
    };
    return (
        <div className="flex flex-row">
            <div
                onClick={toggleHeightDropdown}
                className="dropdown text-sky-100 relative p-2 bg-sky-700 justify-center cursor-pointer"
            >
                <ArrowDropDownIcon className="float-left" />
                Choose Height Metric
                {isHeightOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                            onClick={() => handleHeightItemClick(true)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                        >
                            Population
                        </div>
                        <div
                            onClick={() => handleHeightItemClick(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                        >
                            Total Disease Numbers
                        </div>
                    </div>
                )}
            </div>
            <div
                onClick={toggleHeatmapDropdown}
                className="dropdown text-sky-100 relative p-2 bg-sky-700 justify-center cursor-pointer"
            >
                <ArrowDropDownIcon className="float-left" />
                Choose Heatmap Metric
                {isHeatmapOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                            onClick={() => handleHeatmapItemClick(true)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                        >
                            Total Disease Numbers
                        </div>
                        <div
                            onClick={() => handleHeatmapItemClick(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                        >
                            Population Affected
                        </div>
                    </div>
                )}
            </div>
            <div className="relative overflow-y-scroll p-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 bg-sky-700 flex flex-row">
                <div className="text-sky-100 mr-5">Radius</div>
                <input
                    type="range"
                    min="1000"
                    max="10000"
                    onChange={(e) => setRadius(e.target.value)}
                />
            </div>
        </div>
    );
}
export default Control;
