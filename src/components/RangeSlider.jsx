import React, { useState } from 'react';
import ReactSlider from 'react-slider';


const RangeSlider = () => {
  const [values, setValues] = useState([45000, 75000]);
  const [gearOneAngle, setGearOneAngle] = useState(0);
  const [gearTwoAngle, setGearTwoAngle] = useState(0);

  const handleSliderChange = (newValues) => {
    const previousValues = [...values];
    setValues(newValues);

    if (newValues[0] !== previousValues[0]) {
      const newAngle = newValues[0] > previousValues[0] ? gearOneAngle + 7 : gearOneAngle - 7;
      setGearOneAngle(newAngle);
    }

    if (newValues[1] !== previousValues[1]) {
      const newAngle = newValues[1] > previousValues[1] ? gearTwoAngle + 7 : gearTwoAngle - 7;
      setGearTwoAngle(newAngle);
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="slider-wrapper">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            defaultValue={[45000, 75000]}
            min={10000}
            max={110000}
            step={100}
            value={values}
            onChange={handleSliderChange}
          />

          <div className="range-wrapper">
            <div className="range">
              <span className="range-value">
                <sup>$</sup>
                {values[0].toLocaleString()}
              </span>
              <span className="range-divider"></span>
              <span className="range-value">
                <sup>$</sup>
                {values[1].toLocaleString()}
              </span>
            </div>
            <div className={`range-alert ${values[1] === 110000 ? 'active' : ''}`}>+</div>

            <div className="gear-wrapper">
              <div className="gear-large gear-one" style={{ transform: `rotate(${gearOneAngle}deg)` }}>
                <div className="gear-tooth"></div>
                <div className="gear-tooth"></div>
                <div className="gear-tooth"></div>
                <div className="gear-tooth"></div>
              </div>
              <div className="gear-large gear-two" style={{ transform: `rotate(${gearTwoAngle}deg)` }}>
                <div className="gear-tooth"></div>
                <div className="gear-tooth"></div>
                <div className="gear-tooth"></div>
                <div className="gear-tooth"></div>
              </div>
            </div>
          </div>

          <div className="marker marker-0">
            <sup>$</sup>10,000
          </div>
          <div className="marker marker-25">
            <sup>$</sup>35,000
          </div>
          <div className="marker marker-50">
            <sup>$</sup>60,000
          </div>
          <div className="marker marker-75">
            <sup>$</sup>85,000
          </div>
          <div className="marker marker-100">
            <sup>$</sup>110,000+
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
