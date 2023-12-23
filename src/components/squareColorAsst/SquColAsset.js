import React from 'react';

const SquColAsset = ({ logo, backgroundColor, text }) => {
     const containerStyle = {
          height: '100px',
          width: '100px',
          textAlign: 'center',
          backgroundColor: backgroundColor,
          padding: '2px',
          borderRadius: '8px',
          marginBottom: '2px',
     };

     const logoStyle = {
          // Add any specific styles for the logo if needed
     };

     return (
          <div style={containerStyle}>
               {logo && React.isValidElement(logo) ? (
                    <div style={logoStyle}>{logo}</div>
               ) : null}
               <p>{text}</p>
          </div>
     );
};

export default SquColAsset;
