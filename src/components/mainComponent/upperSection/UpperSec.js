import React from 'react';

const UpperSec = () => {
     return (
          <div style={upperSecStyle}>
               <div style={leftPartStyle}>
                    <div style={leftTopStyle}>
                         <div style={squareStyle}>1</div>
                         <div style={squareStyle}>2</div>
                         <div style={squareStyle}>3</div>
                         <div style={squareStyle}>4</div>
                         <div style={squareStyle}>5</div>
                    </div>
                    <div style={leftBottomStyle}>
                         <div style={squareStyle}>5</div>
                         <div style={squareStyle}>5</div>

                    </div>
               </div>
               <div style={rightPartStyle}><div style={squareStyle}>1</div>
                    <div style={squareStyle}>2</div>
                    <div style={squareStyle}>3</div>
                    <div style={squareStyle}>4</div>
                    <div style={squareStyle}>5</div>
                    <div style={squareStyle}>6</div>

               </div>
          </div>
     );
};

export default UpperSec;

// Inline Styles
const upperSecStyle = {
     border: '1px solid #ddd',
     display: 'flex',
     height: '40%',
};

const leftPartStyle = {
     flex: '2',
     display: 'flex',
     flexDirection: 'column',
};

const leftTopStyle = {
     display: 'flex',
     gap: '8px',
     padding: '10px',
     borderBottom: '1px solid #ddd',
};

const squareStyle = {
     width: '50px',
     height: '50px',
     backgroundColor: '#ddd',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     fontSize: '16px',
     fontWeight: 'bold',
};

const leftBottomStyle = {
     display: 'flex',
     gap: '10px',
     padding: '10px',
};

const rightPartStyle = {
     flex: '1',
     display: 'grid',
     gridTemplateColumns: 'repeat(2, 1fr)',
     gap: '8px',
     padding: '10px',
};
