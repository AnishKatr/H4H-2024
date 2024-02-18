import React from "react";
import logo from "./logo.svg";

function Banner({ message, backgroundColor, color }) {
    const bannerStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: backgroundColor || "#007bff", // Blue right now, but change later according to theme
        color: color || "#ffffff", // change color to intended scheme
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "50px",
        marginBottom: "50px",
    };

    const logoStyle = {
        width: "75px",
        height: "75px",
        marginRight: "10px",
 
    };

    return (
        <div style={bannerStyle}>
            <img src={logo} alt="logo" style={logoStyle} />
            <h1 style={{ display: "inline-block" }}>Microscope</h1>
            <div className="text-xs bg-sky-900">Test Stuff</div>
        </div>
    );
}

export default Banner;
