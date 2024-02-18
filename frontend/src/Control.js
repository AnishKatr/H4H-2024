import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Control({height,color}){
    const [isOpenh, setIsOpenh] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdownh = () => {
        setIsOpenh(!isOpenh);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClickh = (item) => {
       height=item;
        setIsOpenh(false);
    };
    const handleItemClick = (item) => {
        color=item;
         setIsOpen(false);
     };
    return(
        <div className="float">
              <div
                    onClick={toggleDropdownh}
                    className="dropdown text-sky-100 relative bg-sky-700 justify-center cursor-pointer"
                >
                    <ArrowDropDownIcon className="float-left" />
                    Choose Height Metric

                    {isOpen && (
                        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div
                                onClick={() => handleItemClickh(false)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                            >
                                Number of Cases
                            </div>
                            <div
                                onClick={() => handleItemClickh(true)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                            >
                                Population
                            </div>
                           
                        </div>
                    )}
                </div>
                <div
                    onClick={toggleDropdown}
                    className="dropdown text-sky-100 relative bg-sky-700 justify-center cursor-pointer"
                >
                    <ArrowDropDownIcon className="float-left" />
                    Choose Heatmap Metric

                    {isOpen && (
                        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div
                                onClick={() => handleItemClick(false)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                            >
                                Percent of Total Disease Numbers
                            </div>
                            <div
                                onClick={() => handleItemClick(true)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                            >
                                Percent of Population Affected
                            </div>
                        </div>
                    )}
                </div>

        </div>
    );
}
export default Control;