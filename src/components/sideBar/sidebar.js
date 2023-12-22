import React from 'react';
import './Sidebar.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import LayersIcon from '@mui/icons-material/Layers';
import FullscreenTwoToneIcon from '@mui/icons-material/FullscreenTwoTone';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Sidebar = () => {
     return (
          <div className="sidebar">
               {/* Top Section */}
               <div className="top-section">
                    <div className="name">Dashboard</div>
                    <KeyboardDoubleArrowLeftIcon color='primary' />
               </div>

               {/* Middle Section */}
               <div className="middle-section">
                    <LayersIcon />
                    <div className="name2">Dashboard</div>

               </div>

               <div>
                    Custom
               </div>

               {/* Lower Section */}
               <div className="lower-section">
                    <div className="option">
                         <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                              <SpaceDashboardRoundedIcon fontSize="small" />
                              <div> Applications</div>
                         </div>
                         <KeyboardArrowDownIcon />
                    </div>
                    <div className="option">
                         <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                              <div>-</div>
                              <div>users</div>
                         </div>
                         <KeyboardArrowRightIcon />
                    </div>
                    <div className="option">
                         <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                              <div>-</div>
                              <div>users</div>
                         </div>
                         <KeyboardArrowRightIcon />
                    </div>
                    <div className="option">
                         <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                              <div>-</div>
                              <div>users</div>
                         </div>
                         <KeyboardArrowRightIcon />
                    </div>
                    <div className="option">
                         <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>

                              <FullscreenTwoToneIcon />
                              <div>Pages</div>
                         </div>
                         <KeyboardArrowRightIcon />
                    </div>

               </div>
          </div >
     );
};

export default Sidebar;
