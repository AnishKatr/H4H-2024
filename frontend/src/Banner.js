import React from 'react';
import logo from "./logo.svg";

function Banner({ message, backgroundColor, color }) {
    const bannerStyle = {
      backgroundColor: backgroundColor || '#007bff', // Blue right now, but change later according to theme
      color: color || '#ffffff', // change color to intended scheme
      padding: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '50px',
      marginBottom: '100px',
    };

    const logostyle = {
        width: '50px',
        height: '50px',
        marginRight: '10px',
        verticalAlign: 'middle',
    };
  
    return (
        <div style={bannerStyle}>
          <img src={logo} alt="logo" style={logoStyle} />
          <h1 style={{ display: 'inline-block' }}>Microscope</h1>
        </div>
      );
  }
  
  export default Banner;