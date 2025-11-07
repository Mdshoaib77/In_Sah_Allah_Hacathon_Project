// src/pages/FoodDistribution.jsx

import React from 'react';
import FoodHero from '../components/FoodDistribution/FoodHero';
import WhatWeDo from '../components/FoodDistribution/WhatWeDo';
import FoodDonationPage from '../components/FoodDistribution/FoodDonationPage';
import CommunityImpact from '../components/FoodDistribution/CommunityImpact';

const FoodDistribution = () => {
  return (
    <div className="p-6">
        <FoodHero/>
        <WhatWeDo/>
        <CommunityImpact/>
<FoodDonationPage/>
    </div>
  );
};

export default FoodDistribution;
