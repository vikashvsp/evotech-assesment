import React from 'react';

const RoundedImage = ({ imageUrl, altText }) => {
     return (
          <div className="icon-container">
               <img src={imageUrl} alt={altText} />
          </div>
     );
};

export default RoundedImage;
