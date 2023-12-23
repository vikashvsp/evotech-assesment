// src/components/MainContent.js
import React from 'react';
import './MainContent.css';
import TopBar from './topBar/topBar';
import UpperSec from './upperSection/UpperSec';

const MainContent = () => {
     return (
          <div className="main-content">
               <TopBar />
               <UpperSec />
          </div>
     );
};

export default MainContent;
