import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import React from 'react';
const PricingCard = ({ title, description, price }) => {
  return (
    <div className="pricing-card">
      <img src="iphone14 pro max.jpg" alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">€{price} Full Price</p>
      <button>Buy Now</button>
    </div>
  );
};



const PricingCard1 = ({ title, description, price }) => {
  return (
    <div className="pricing-card1">
      <img src="iphone14 pro.jpg" alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">€{price} Full Price</p>
      <button>Buy Now</button>
    </div>
  );
};



const PricingCard2 = ({ title, description, price }) => {
  return (
    <div className="pricing-card2">
      <img src="iphone14.jpg" alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">€{price} Full Price</p>
      <button>Buy Now</button>
    </div>
  );
};





  const PricingContainer = () => {
    return (
      <div className="pricing-container">
        <PricingCard title="iPhone 14 Pro Max" description="New Box, Space Black, Silver, Deep Purple Gold 256GB ROM 6GB RAM" price={1140} />
        <PricingCard1 title="iPhone 14 Pro" description="New Box, Space Black, Silver, Deep Purple Gold 256GB ROM 6GB RAM " price={1030} />
        <PricingCard2 title="iPhone 14" description="New Box, Midnight, Purple, Starlight, Blue, Red, Yellow 256GB ROM 6GB RAM " price={890} />
      </div>
    );
  };

export default PricingContainer;





const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PricingContainer />
  </StrictMode>
);

