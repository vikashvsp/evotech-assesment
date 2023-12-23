// src/components/MainContent.js
import React from 'react';
import './MainContent.css';
import TopBar from './topBar/topBar';
import UpperSec from './upperSection/UpperSec';
import MiddleSec from './middleSection/MiddleSec';
import LowerSection from './lowerSection/LowerSec';

const MainContent = () => {
     return (
          <div className="main-content">
               <TopBar />
               <UpperSec />
               <MiddleSec />
               <LowerSection />
          </div>
     );
};

export default MainContent;
