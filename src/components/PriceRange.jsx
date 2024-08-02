import React, { useState, useEffect } from 'react';
import './PriceRange'

const PriceRangeSlider = () => {
  // Initial state for the minimum and maximum prices
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(8500);

  // Price gap constant
  const priceGap = 500;

  // Handlers for input change
  const handleMinPriceChange = (e) => {
    let value = parseInt(e.target.value);
    if (value < 0) value = 0;
    if (value > maxPrice - priceGap) value = maxPrice - priceGap;
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    let value = parseInt(e.target.value);
    if (value > 10000) value = 10000;
    if (value < minPrice + priceGap) value = minPrice + priceGap;
    setMaxPrice(value);
  };

  // Update the slider position when minPrice or maxPrice changes
  useEffect(() => {
    const minRange = document.querySelector('.min-range');
    const maxRange = document.querySelector('.max-range');
    const priceSlider = document.querySelector('.price-slider');

    minRange.value = minPrice;
    maxRange.value = maxPrice;

    const minPercent = (minPrice / minRange.max) * 100;
    const maxPercent = 100 - (maxPrice / maxRange.max) * 100;

    priceSlider.style.left = `${minPercent}%`;
    priceSlider.style.right = `${maxPercent}%`;
  }, [minPrice, maxPrice]);

  return (
    <div className="main">
      <div className="gfg">

      </div>
      <div className="custom-wrapper">
        <div className="header">

        </div>

        <div className="price-input-container">

          <div className="slider-container">
            <div className="price-slider"></div>
          </div>
        </div>

        <div className="range-input">
          <input
            type="range"
            className="min-range"
            min="0"
            max="10000"
            step="1"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="range"
            className="max-range"
            min="0"
            max="10000"
            step="1"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
