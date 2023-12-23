import React from 'react';

const TopBar = () => {
     return (
          <div style={middleSectionStyle}>
               {/* Top Section with Search Bar, Icons, and Account Name */}
               <div style={topSectionStyle}>
                    <div style={searchBarStyle}>
                         <input type="text" style={inputStyle} placeholder="Search..." />
                         <button style={buttonStyle}>Search</button>
                    </div>
                    <div style={iconsStyle}>
                         <div style={iconStyle}>Icon 1</div>
                         <div style={iconStyle}>Icon 2</div>
                         <div style={iconStyle}>Icon 3</div>
                         <div style={iconStyle}>Icon 4</div>
                    </div>
                    <div style={accountNameStyle}>Your Account Name</div>
               </div>

               <h2 style={dashboardTitleStyle}>Dashboard</h2>
               {/* Rest of the content */}
          </div>
     );
};

export default TopBar;

// Inline Styles
const middleSectionStyle = {
     paddingBottom: '20px',
     borderBottom: '1px solid #555',
     marginBottom: '20px',
};

const topSectionStyle = {
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginBottom: '20px',
};

const searchBarStyle = {
     display: 'flex',
     alignItems: 'center',
};

const inputStyle = {
     padding: '8px',
     marginRight: '10px',
};

const buttonStyle = {
     padding: '8px',
};

const iconsStyle = {
     display: 'flex',
     marginRight: '20px',
};

const iconStyle = {
     padding: '8px',
     marginRight: '10px',
     backgroundColor: '#ddd',
};

const accountNameStyle = {
     fontSize: '16px',
     color: '#555',
};

const dashboardTitleStyle = {
     fontSize: '20px',
     marginBottom: '10px',
};
