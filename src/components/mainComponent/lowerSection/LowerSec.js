import React from 'react';
import { useState } from 'react';
import SquColAsset from '../../squareColorAsst/SquColAsset';
import EqualizerTwoToneIcon from '@mui/icons-material/EqualizerTwoTone';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import BorderAllTwoToneIcon from '@mui/icons-material/BorderAllTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { green, orange, purple, red } from '@mui/material/colors';


const LowerSection = () => {
     const [selectedTab, setSelectedTab] = useState('Month');

     const chartSetting = {

          width: 800,
          height: 250,
          sx: {
               [`.${axisClasses.left} .${axisClasses.label}`]: {
                    transform: 'translate(-20px, 0)',
               },
          },
     };
     const dataset = [
          {
               london: 59,
               paris: 57,
               month: '1 AUG',
          },
          {
               london: 21,
               paris: 15,
               month: '8 AUG',
          },
          {
               london: 9,
               paris: 45,
               month: '17 AUG',
          },
          {
               london: 35,
               paris: 56,
               month: '20 AUG',
          },
          {
               london: 87,
               paris: 14,
               month: '29 AUG',
          },
          {
               london: 64,
               paris: 23,
               month: '5 SEP',
          },

     ];

     const valueFormatter = (value) => `${value}mm`;
     return (
          <div style={middleSectionStyle}>
               <div style={leftSectionStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                         <div>
                              <div>
                                   Recent stats
                              </div>
                              <div style={{ fontSize: '10px', opacity: 0.6 }}>
                                   More than 400+ new members
                              </div>
                         </div>
                         <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                              <div
                                   style={{
                                        ...tabStyle,
                                        ...(selectedTab === 'Month' ? selectedTabStyle : {}),
                                        fontSize: '13px'
                                   }}
                                   onClick={() => setSelectedTab('Month')}
                              >
                                   Month
                              </div>
                              <div
                                   style={{
                                        ...tabStyle,
                                        ...(selectedTab === 'Week' ? selectedTabStyle : {}),
                                        fontSize: '13px'

                                   }}
                                   onClick={() => setSelectedTab('Week')}
                              >
                                   Week
                              </div>
                              <div
                                   style={{
                                        ...tabStyle,
                                        ...(selectedTab === 'Day' ? selectedTabStyle : {}),
                                        fontSize: '13px'

                                   }}
                                   onClick={() => setSelectedTab('Day')}
                              >
                                   Day
                              </div>
                         </div>
                    </div>

                    <BarChart
                         dataset={dataset}
                         xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                         series={[
                              { dataKey: 'london', label: 'London', valueFormatter },
                              { dataKey: 'paris', label: 'Paris', valueFormatter },

                         ]}
                         {...chartSetting}
                    />
               </div>
               <div style={rightSectionStyle}>
                    <SquColAsset logo={<EqualizerTwoToneIcon sx={{ color: orange[700] }} />} backgroundColor={'rgba(255, 185, 56,0.3)'} text={'Weekly Sales'} textColor={'rgba(255, 185, 56)'} />
                    <SquColAsset logo={<GroupAddTwoToneIcon sx={{ color: purple[700] }} />} backgroundColor={'rgba(175, 12, 245,0.3)'} text={'New Users'} textColor={'rgba(175, 12, 245)'} />
                    <SquColAsset logo={<BorderAllTwoToneIcon sx={{ color: red[700] }} />} backgroundColor={'rgba(250, 35, 56,0.3)'} text={'Item Orders'} textColor={'rgba(250, 35, 56)'} />
                    <SquColAsset logo={<EmailTwoToneIcon sx={{ color: green['A700'] }} />} backgroundColor={'rgba(8, 255, 201,0.2)'} text={'Bug reports'} textColor={'rgba(3, 97, 77))'} />
               </div>
          </div>
     );
};

export default LowerSection;

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
     flex: '7',
     marginRight: '10px',
     backgroundColor: '#f0f0f0',
};

const rightSectionStyle = {
     ...commonSectionStyle,
     flex: '3',
     marginLeft: '10px',
     backgroundColor: '#f0f0f0',
     flexDirection: 'column',
     justifyContent: 'center', // Center vertically
     alignItems: 'center', // Center horizontally

     height: '100%', // Set a fixed height for the right section,
     display: 'grid',
     gridTemplateColumns: '1fr 1fr', // Updated property
};

const tabStyle = {
     padding: '10px',
     borderRadius: '8px',
     cursor: 'pointer',
};

const selectedTabStyle = {
     backgroundColor: 'grey',
     color: 'white',
};
