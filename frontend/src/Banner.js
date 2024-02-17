import React from 'react';

function Banner({ message, backgroundColor, color }) {
    const bannerStyle = {
      backgroundColor: backgroundColor || '#007bff', // Blue right now, but change later according to theme
      color: color || '#ffffff', // change color to intended scheme
      padding: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '20px',
    };
  
    return (
      <div style={bannerStyle}>
        {message}
      </div>
    );
  }
  
  export default Banner;