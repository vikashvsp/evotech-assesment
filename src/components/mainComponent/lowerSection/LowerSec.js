import React from 'react';
import { useState } from 'react';
import SquColAsset from '../../squareColorAsst/SquColAsset';
import EqualizerTwoToneIcon from '@mui/icons-material/EqualizerTwoTone';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import BorderAllTwoToneIcon from '@mui/icons-material/BorderAllTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';


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
                              <div>
                                   More than 400+ new members
                              </div>
                         </div>
                         <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                              <div
                                   style={{
                                        ...tabStyle,
                                        ...(selectedTab === 'Month' ? selectedTabStyle : {}),
                                   }}
                                   onClick={() => setSelectedTab('Month')}
                              >
                                   Month
                              </div>
                              <div
                                   style={{
                                        ...tabStyle,
                                        ...(selectedTab === 'Week' ? selectedTabStyle : {}),
                                   }}
                                   onClick={() => setSelectedTab('Week')}
                              >
                                   Week
                              </div>
                              <div
                                   style={{
                                        ...tabStyle,
                                        ...(selectedTab === 'Day' ? selectedTabStyle : {}),
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
                              { dataKey: 'london', valueFormatter },
                              { dataKey: 'paris', valueFormatter },
                         ]}
                         {...chartSetting}
                    />
               </div>
               <div style={rightSectionStyle}>
                    <SquColAsset logo={<EqualizerTwoToneIcon color='primary' />} backgroundColor={'grey'} text={'Weekly Sales'} />
                    <SquColAsset logo={<GroupAddTwoToneIcon />} backgroundColor={'red'} text={'New Users'} />
                    <SquColAsset logo={<BorderAllTwoToneIcon />} backgroundColor={'green'} text={'Item Orders'} />
                    <SquColAsset logo={<EmailTwoToneIcon />} backgroundColor={'brown'} text={'Bug reports'} />
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
