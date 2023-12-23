import React from 'react';

const MiddleSection = () => {
     return (
          <div style={middleSectionStyle}>
               <div style={leftSectionStyle}>
                    Left Section
               </div>
               <div style={rightSectionStyle}>
                    Right Section
               </div>
          </div>
     );
};

export default MiddleSection;

// Inline Styles
const middleSectionStyle = {
     marginTop: '20px',
     display: 'flex',
     alignItems: 'stretch',
     height: '40%',
};

const commonSectionStyle = {
     padding: '20px',
     borderRadius: '10px',
     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
     boxSizing: 'border-box',
};

const leftSectionStyle = {
     ...commonSectionStyle,
     flex: '3',
     marginRight: '10px',
     backgroundColor: '#f0f0f0',
};

const rightSectionStyle = {
     ...commonSectionStyle,
     flex: '7',
     marginLeft: '10px',
     backgroundColor: '#f0f0f0', // Make the background color similar to left section
};