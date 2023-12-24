import React from 'react';
import SquColAsset from '../../squareColorAsst/SquColAsset';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryIcon from '@mui/icons-material/Category';
import TheatersIcon from '@mui/icons-material/Theaters';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { LineChart } from '@mui/x-charts';
import RedeemIcon from '@mui/icons-material/Redeem';
import PolylineIcon from '@mui/icons-material/Polyline';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CakeIcon from '@mui/icons-material/Cake';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
const UpperSec = () => {
     const chartData = [10, 20, 15, 25, 18];
     const chartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];

     return (
          <div style={upperSecStyle}>
               <div style={leftPartStyle}>
                    <div style={leftTopStyle}>
                         <SquColAsset logo={<MenuIcon color="disabled" />} backgroundColor={'white'} text={'SaaS Application'} />
                         <SquColAsset logo={<CategoryIcon color="disabled" />} backgroundColor={'white'} text={'Main Categories'} />
                         <SquColAsset logo={<TheatersIcon color="disabled" />} backgroundColor={'white'} text={'Video Tutorials'} />
                         <SquColAsset logo={<EqualizerIcon color="disabled" />} backgroundColor={'white'} text={'Sales Statistics'} />
                         <SquColAsset logo={<VerifiedUserIcon color="disabled" />} backgroundColor={'white'} text={'ARC    Security'} />

                    </div>
                    <div style={{
                         display: 'flex',
                         gap: '10px',
                         padding: '10px',
                         justifyContent: 'space-between',
                         height: '100%'
                    }}>
                         <div style={{
                              borderRadius: '10px',
                              background: 'linear-gradient(to bottom, rgba(255,0,0,0.5) 90%, white 30%)',
                              padding: '10px',
                              flex: 1,
                         }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                   <div>Sales Progress</div>
                                   <div style={{ display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '2px', borderRadius: '5px', height: '20px' }}>
                                        <div style={{ fontSize: '12px', marginRight: '5px' }}>Export</div>
                                        <div>
                                             <KeyboardArrowDownIcon style={{ height: '20px' }} />
                                        </div>
                                   </div>

                              </div>
                              <div>
                                   <LineChart
                                        // xAxis={[{ data: [0, 1, 2, 3, 5, 8, 10] }]}
                                        series={[
                                             {
                                                  data: [0, 2, 5.5, 2, 8.5, 1.5, 5],
                                                  area: true,
                                                  color: 'red'
                                             },
                                        ]}
                                        width={400}
                                        height={200}
                                        leftAxis={null}
                                        bottomAxis={null}
                                   />
                              </div>
                         </div>
                         <div style={{ borderRadius: '10px', backgroundColor: 'white', padding: '10px', flex: 1, overflow: 'hidden' }}>
                              <VerticalTimeline lineColor='black' animate={true} layout='2-column-left'>

                                   <VerticalTimelineElement
                                        visible={false}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize: '10px', }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', }}
                                        date="8:42 PM"
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        icon={<Brightness1Icon />
                                        }
                                   >
                                        <p className="vertical-timeline-element-title">Outlines keep you honest. indulging in poorly driving and keep structure.</p>

                                   </VerticalTimelineElement>
                              </VerticalTimeline>
                         </div>
                    </div>


               </div>
               <div style={rightPartStyle}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', margin: '10px', marginLeft: '45px' }}>
                         <SquColAsset logo={<RedeemIcon color="disabled" />} backgroundColor={'white'} text={'Great Gifts'} />
                         <SquColAsset logo={<PolylineIcon color="disabled" />} backgroundColor={'white'} text={'Great Gifts'} />
                         <SquColAsset logo={<FingerprintIcon color="disabled" />} backgroundColor={'white'} text={'Great Gifts'} />
                         <SquColAsset logo={<AppRegistrationIcon color="disabled" />} backgroundColor={'white'} text={'Great Gifts'} />
                         <SquColAsset logo={<CakeIcon color="disabled" />} backgroundColor={'white'} text={'Great Gifts'} />
                         <SquColAsset logo={<RocketLaunchIcon color="disabled" />} backgroundColor={'white'} text={'Great Gifts'} />
                    </div>

               </div>
          </div>
     );
};

export default UpperSec;

// Inline Styles
const upperSecStyle = {
     marginTop: '20px',
     display: 'flex',
     height: '60%',
     alignItems: 'stretch',


};
const commonSectionStyle = {
     padding: '20px',
     borderRadius: '10px',
     boxShadow: '0 0 10px rgba(0, 0, 255, 0.1)',
     boxSizing: 'border-box',
};
const leftPartStyle = {
     ...commonSectionStyle,
     flex: '2',
     display: 'flex',
     flexDirection: 'column',
     backgroundColor: '#f0f0f0', // Make the background color similar to left section

};

const leftTopStyle = {
     display: 'flex',
     gap: '8px',
     padding: '5px',
     justifyContent: 'space-between',
     // marginBottom: '20px'
};





const rightPartStyle = {
     ...commonSectionStyle,
     marginLeft: '10px',
     flex: '1',
     padding: '10px',
     backgroundColor: '#f0f0f0', // Make the background color similar to left section

};
