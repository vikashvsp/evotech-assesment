import React, { useRef } from 'react';

const SquColAsset = ({ logo, backgroundColor, text, textColor }) => {
     const containerRef = useRef(); // Define containerRef here

     const containerStyle = {
          height: '100px',
          width: '100px',
          textAlign: 'center',
          backgroundColor: backgroundColor,
          padding: '2px',
          borderRadius: '8px',
          marginBottom: '2px',
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer',
     };

     const logoStyle = {
          marginTop: 20,
          marginBottom: -10
     };

     const handleHover = () => {
          containerRef.current.style.transform = 'scale(1.1)';
     };

     const handleHoverOut = () => {
          containerRef.current.style.transform = 'scale(1)';
     };

     return (
          <div
               style={containerStyle}
               onMouseEnter={handleHover}
               onMouseLeave={handleHoverOut}
               ref={containerRef} // Assign containerRef to the div
          >
               {logo && React.isValidElement(logo) ? (
                    <div style={logoStyle}>{logo}</div>
               ) : null}
               <p style={{ color: textColor }}>{text}</p>
          </div>
     );
};

export default SquColAsset;
