import React from 'react';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import toggle from '../../../../src/assets/images/toggle-icon-512x480-onijjt7v.png';
import edit from '../../../../src/assets/images/edit.png';
import delete1 from '../../../../src/assets/images/delete.png';
import image1 from '../../../../src/assets/images/Pinterest-logo.png';
import image2 from '../../../../src/assets/images/png-transparent-telegram-logo-computer-icons-telegram-logo-blue-angle-triangle-thumbnail.png';
import image3 from '../../../../src/assets/images/puzzle_icon_149707.png';
import image4 from '../../../../src/assets/images/bing-color-icon.png'

const MiddleSection = () => {
     const [selectedTab, setSelectedTab] = useState('Month');

     const GrowOnHoverContainer = ({ children }) => {
          const [isHovered, setHovered] = useState(false);

          return (
               <div
                    style={{
                         display: 'flex',
                         alignItems: 'center',
                         marginTop: '10px',
                         marginRight: '10px',
                         marginBottom: '10px',
                         transition: 'all 0.3s',
                         transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
               >
                    {children}
               </div>
          );
     };
     return (
          <div style={middleSectionStyle}>
               <div style={leftSectionStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                         <div>Sales Progress</div>
                         <div><MoreHorizIcon /></div>
                    </div>
                    <div>
                         <GrowOnHoverContainer>
                              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginRight: '10px', marginBottom: '1px' }}>
                                   <div style={{ transform: 'rotateX(20deg)', background: '#BF40BF', opacity: 0.7, borderRadius: '20%', marginRight: '20px', padding: '4px' }}>
                                        <MenuIcon fontSize="small" />
                                   </div>
                                   <div>
                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>Briv<b>bia</b> Saas</div>
                                        <div style={{ fontSize: '10px', opacity: 0.6 }}>PHP, Sqlite, Artisan, Climm</div>
                                   </div>
                              </div>
                         </GrowOnHoverContainer>
                         <GrowOnHoverContainer>

                              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                   <div style={{ transform: 'rotateX(20deg)', background: 'yellow', opacity: 0.7, borderRadius: '20%', marginRight: '20px', padding: '4px' }}>
                                        <MicIcon fontSize="small" />
                                   </div>
                                   <div>
                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>Briv<b>bia</b> Saas</div>
                                        <div style={{ fontSize: '10px', opacity: 0.6 }}>PHP, Sqlite, Artisan, Climm</div>
                                   </div>
                              </div>
                         </GrowOnHoverContainer>
                         <GrowOnHoverContainer>

                              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                   <div style={{ transform: 'rotateX(20deg)', background: 'green', opacity: 0.7, borderRadius: '20%', marginRight: '20px', padding: '4px' }}>
                                        <QuestionAnswerIcon fontSize="small" />
                                   </div>
                                   <div>
                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>Briv<b>bia</b> Saas</div>
                                        <div style={{ fontSize: '10px', opacity: 0.6 }}>PHP, Sqlite, Artisan, Climm</div>
                                   </div>
                              </div>
                         </GrowOnHoverContainer>
                         <GrowOnHoverContainer>

                              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                   <div style={{ transform: 'rotateX(20deg)', background: 'red', opacity: 0.7, borderRadius: '20%', marginRight: '20px', padding: '4px' }}>
                                        <AutoGraphIcon fontSize="small" />
                                   </div>
                                   <div>
                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>Briv<b>bia</b> Saas</div>
                                        <div style={{ fontSize: '10px', opacity: 0.6 }}>PHP, Sqlite, Artisan, Climm</div>
                                   </div>
                              </div>
                         </GrowOnHoverContainer>
                         <GrowOnHoverContainer>

                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                   <div style={{ transform: 'rotateX(20deg)', background: 'blue', opacity: 0.7, borderRadius: '20%', marginRight: '20px', padding: '4px' }}>
                                        <VerifiedUserIcon fontSize="small" />
                                   </div>
                                   <div>
                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>Briv<b>bia</b> Saas</div>
                                        <div style={{ fontSize: '10px', opacity: 0.6 }}>PHP, Sqlite, Artisan, Climm</div>
                                   </div>
                              </div>
                         </GrowOnHoverContainer>
                    </div>
               </div>
               <div style={rightSectionStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                         <div>
                              <div>
                                   New Arrivals
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
                    <div>
                         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                              <div style={{ display: 'flex', gap: '10px' }}>
                                   <div style={{ borderRadius: '5px', backgroundColor: '#cccccc', padding: '5px', display: 'inline-block' }}>
                                        <img src={image1} alt='hello' height={25} style={{ borderRadius: '5px', marginTop: '3px' }} />
                                   </div>
                                   <div style={{ justifyContent: 'space-between' }}>

                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                             Sant Outstanding
                                        </div>
                                        <div style={{ fontSize: '10px' }}>
                                             <b>FTP: </b>bprow@bnc.cc
                                        </div>
                                   </div>
                              </div>
                              <div style={{ textAlign: 'right', fontSize: '15px' }}>
                                   <p style={{ margin: 0, fontWeight: 'bold' }}>$4,60,000</p>
                                   <p style={{ margin: 0 }}>Paid</p>
                              </div>
                              <GrowOnHoverContainer>

                                   <div style={{ position: 'relative', display: 'flex', padding: '2px', alignItems: 'center', justifyContent: 'center', marginTop: '2px', height: '15px', borderRadius: '3px' }}>
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 255, 0.2)', borderRadius: '3px' }}></div>
                                        <div style={{ position: 'relative', fontWeight: 'bold', fontSize: '12px', color: 'rgba(0, 0, 255, 0.6)' }}>
                                             Approved
                                        </div>
                                   </div>
                              </GrowOnHoverContainer>
                              <div style={{ display: 'flex', justifyContent: 'space-between', width: '120px', height: '35px' }}>
                                   <GrowOnHoverContainer>
                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={toggle} alt='Toggle' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                                   <GrowOnHoverContainer>

                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={edit} alt='Edit' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                                   <GrowOnHoverContainer>

                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={delete1} alt='Delete' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                              </div>
                         </div>
                         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                              <div style={{ display: 'flex', gap: '10px' }}>
                                   <div style={{ borderRadius: '5px', backgroundColor: '#cccccc', padding: '5px', display: 'inline-block' }}>
                                        <img src={image2} alt='hello' height={25} style={{ borderRadius: '5px', marginTop: '3px' }} />
                                   </div>
                                   <div>

                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                             Sant Outstanding
                                        </div>
                                        <div style={{ fontSize: '10px' }}>
                                             <b>FTP: </b>bprow@bnc.cc
                                        </div>
                                   </div>
                              </div>
                              <div style={{ textAlign: 'right', fontSize: '15px' }}>
                                   <p style={{ margin: 0, fontWeight: 'bold' }}>$4,60,000</p>
                                   <p style={{ margin: 0 }}>Paid</p>
                              </div>
                              <GrowOnHoverContainer>

                                   <div style={{ position: 'relative', display: 'flex', padding: '2px', alignItems: 'center', justifyContent: 'center', marginTop: '2px', height: '15px', borderRadius: '3px' }}>
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,165,0, 0.2)', borderRadius: '3px' }}></div>
                                        <div style={{ position: 'relative', fontWeight: 'bold', fontSize: '12px', color: 'rgba(255, 165,0 , 1)' }}>
                                             In Progress
                                        </div>
                                   </div>
                              </GrowOnHoverContainer>
                              <div style={{ display: 'flex', justifyContent: 'space-between', width: '120px', height: '35px' }}>
                                   <GrowOnHoverContainer>
                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={toggle} alt='Toggle' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                                   <GrowOnHoverContainer>

                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={edit} alt='Edit' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                                   <GrowOnHoverContainer>

                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={delete1} alt='Delete' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                              </div>

                         </div>
                         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                              <div style={{ display: 'flex', gap: '10px' }}>
                                   <div style={{ borderRadius: '5px', backgroundColor: '#cccccc', padding: '5px', display: 'inline-block' }}>
                                        <img src={image3} alt='hello' height={25} style={{ borderRadius: '5px', marginTop: '3px' }} />
                                   </div>
                                   <div>

                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                             Sant Outstanding
                                        </div>
                                        <div style={{ fontSize: '10px' }}>
                                             <b>FTP: </b>bprow@bnc.cc
                                        </div>
                                   </div>
                              </div>
                              <div style={{ textAlign: 'right', fontSize: '15px' }}>
                                   <p style={{ margin: 0, fontWeight: 'bold' }}>$4,60,000</p>
                                   <p style={{ margin: 0 }}>Paid</p>
                              </div>
                              <GrowOnHoverContainer>

                                   <div style={{ position: 'relative', display: 'flex', padding: '2px', alignItems: 'center', justifyContent: 'center', marginTop: '2px', height: '15px', borderRadius: '3px' }}>
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 199, 130, 0.2)', borderRadius: '3px' }}></div>
                                        <div style={{ position: 'relative', fontWeight: 'bold', fontSize: '12px', color: 'rgba(0, 199, 130, 1)' }}>
                                             Success                                   </div>
                                   </div>
                              </GrowOnHoverContainer>
                              <div style={{ display: 'flex', justifyContent: 'space-between', width: '120px', height: '35px' }}>
                                   <GrowOnHoverContainer>
                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={toggle} alt='Toggle' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                                   <GrowOnHoverContainer>

                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={edit} alt='Edit' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                                   <GrowOnHoverContainer>

                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={delete1} alt='Delete' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                              </div>

                         </div>
                         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                              <div style={{ display: 'flex', gap: '10px' }}>
                                   <div style={{ borderRadius: '5px', backgroundColor: '#cccccc', padding: '5px', display: 'inline-block' }}>
                                        <img src={image4} alt='hello' height={25} style={{ borderRadius: '5px', marginTop: '3px' }} />
                                   </div>
                                   <div>

                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                             Sant Outstanding
                                        </div>
                                        <div style={{ fontSize: '10px' }}>
                                             <b>FTP: </b>bprow@bnc.cc
                                        </div>
                                   </div>
                              </div>
                              <div style={{ textAlign: 'right', fontSize: '15px' }}>
                                   <p style={{ margin: 0, fontWeight: 'bold' }}>$4,60,000</p>
                                   <p style={{ margin: 0 }}>Paid</p>
                              </div>
                              <GrowOnHoverContainer>

                                   <div style={{ position: 'relative', display: 'flex', padding: '2px', alignItems: 'center', justifyContent: 'center', marginTop: '2px', height: '15px', borderRadius: '3px' }}>
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(245, 47, 2, 0.2)', borderRadius: '3px' }}></div>
                                        <div style={{ position: 'relative', fontWeight: 'bold', fontSize: '12px', color: 'rgba(245, 47, 2 , 1)' }}>
                                             Rejected                                   </div>
                                   </div>
                              </GrowOnHoverContainer>
                              <div style={{ display: 'flex', justifyContent: 'space-between', width: '120px', height: '35px' }}>
                                   <GrowOnHoverContainer>
                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={toggle} alt='Toggle' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                                   <GrowOnHoverContainer>

                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={edit} alt='Edit' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                                   <GrowOnHoverContainer>

                                        <div style={{ backgroundColor: 'rgba(169, 169, 169, 0.2)', borderRadius: '5px', padding: '5px' }}>
                                             <img src={delete1} alt='Delete' height={20} style={{ borderRadius: '5px', marginTop: '2px' }} />
                                        </div>
                                   </GrowOnHoverContainer>
                              </div>

                         </div>

                    </div>
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
     boxShadow: '0 0 10px rgba(0, 0, 255, 0.1)',
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
const tabStyle = {
     padding: '10px',
     borderRadius: '8px',
     cursor: 'pointer',
};

const selectedTabStyle = {
     backgroundColor: 'black',
     color: 'white',
};