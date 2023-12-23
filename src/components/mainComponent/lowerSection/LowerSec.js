import React from 'react';
import SquColAsset from '../../squareColorAsst/SquColAsset';
import EqualizerTwoToneIcon from '@mui/icons-material/EqualizerTwoTone';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import BorderAllTwoToneIcon from '@mui/icons-material/BorderAllTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

const LowerSection = () => {
     return (
          <div style={middleSectionStyle}>
               <div style={leftSectionStyle}>Left Section</div>
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


