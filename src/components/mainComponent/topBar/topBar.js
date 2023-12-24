import React from 'react';
import { useState } from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { blue, green } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import DiamondIcon from '@mui/icons-material/Diamond';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CategoryIcon from '@mui/icons-material/Category';

const TopBar = () => {
     const [selectedTab, setSelectedTab] = useState('Month');

     return (
          <>
               <div style={{ display: 'flex' }}>

                    <div style={{
                         display: 'flex',
                         justifyContent: 'flex-end',
                         alignItems: 'center',
                         paddingBottom: '20px',
                         borderBottom: '1px solid rgba(43, 16, 199,0.2)',
                         marginBottom: '18px',
                         gap: '15px',
                         flex: 7,
                    }}>
                         <SearchIcon sx={{ color: blue[400] }} />
                         <DiamondIcon sx={{ color: blue[400] }} />
                         <EqualizerIcon sx={{ color: blue[400] }} />
                         <ShoppingBasketIcon sx={{ color: blue[400] }} />
                         <CategoryIcon sx={{ color: blue[400] }} />
                    </div>

                    <div style={{ flex: 1, display: 'flex', justifyContent: 'space-evenly' }}>
                         <div style={{ fontSize: '12px', color: 'rgba(125,125,125,0.7)', marginTop: '8px' }}>
                              Nick Thomas
                         </div>
                         <div style={{
                              width: '40px', // Adjust the width as needed
                              height: '40px', // Adjust the height as needed
                              borderRadius: '5px', // Adjust the border-radius for rounded corners
                              backgroundColor: 'rgba(0, 255, 0, 0.1)', // Transparent green background
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontSize: '15px', // Adjust the font size as needed
                              color: '#2e7d32'
                         }}>
                              N
                         </div>

                    </div>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1, marginRight: '30px' }}>

                         <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '8px' }}>
                              <div>
                                   Dashboard
                              </div>
                              <div style={{ marginLeft: '10px', marginRight: '10px' }}> | </div>
                              <div style={{
                                   display: 'inline-block',
                                   padding: '5px',
                                   borderRadius: '3px',
                                   background: 'rgba(255, 165, 0, 0.2)',
                                   fontSize: '12px',
                                   color: 'rgba(255, 165, 0, 0.8)',
                                   height: '16px'
                              }}>
                                   Add New
                              </div>

                         </div>
                         <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                              <div
                                   style={{
                                        ...tabStyle,
                                        ...(selectedTab === 'Month' ? selectedTabStyle : {}),
                                        fontSize: '13px',
                                        color: 'rgba(43, 16, 199)'

                                   }}
                                   onClick={() => setSelectedTab('Month')}
                              >
                                   Today
                              </div>
                              <div
                                   style={{
                                        ...tabStyle,
                                        ...(selectedTab === 'Week' ? selectedTabStyle : {}),
                                        fontSize: '13px',
                                        color: 'rgba(43, 16, 199)'

                                   }}
                                   onClick={() => setSelectedTab('Week')}
                              >
                                   Month
                              </div>
                              <div
                                   style={{
                                        ...tabStyle,
                                        ...(selectedTab === 'Day' ? selectedTabStyle : {}),
                                        fontSize: '13px',
                                        color: 'rgba(43, 16, 199)'

                                   }}
                                   onClick={() => setSelectedTab('Day')}
                              >
                                   Year
                              </div>
                         </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', flex: 0.1 }}>
                         <div style={{
                              display: 'inline-block',
                              padding: '10px',
                              borderRadius: '3px',
                              background: 'rgba(125, 125, 125, 0.2)',
                              fontSize: '12px',
                              color: 'rgba(125,125,125, 0.8)',
                              height: '16px'
                         }}>
                              Actions
                         </div>
                         <div style={{ marginTop: '5px' }}>
                              <NoteAddIcon sx={{ color: green[800] }} />
                         </div>
                    </div>
               </div >
          </>
     );
};

export default TopBar;
const tabStyle = {
     padding: '10px',
     borderRadius: '8px',
     cursor: 'pointer',
};

const selectedTabStyle = {
     backgroundColor: 'rgba(125,125,125,0.2)',
     height: '18px',
     color: 'white',
};


