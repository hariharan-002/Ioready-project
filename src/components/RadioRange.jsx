import React, { useState } from 'react';
import RadioButton from './RadioButton';
import './RadioRange.css'

const RadioRange = () => {
  const [selectedAirline, setSelectedAirline] = useState('');

  const handleRadioChange = (e) => {
    setSelectedAirline(e.target.value);
  };

  return (
    <div className="filters">
      <h3>Preferred Airlines</h3>
      <RadioButton
        name="airline"
        value="abc"
        checked={selectedAirline === 'abc'}
        onChange={handleRadioChange}
        label="ABC Air Technologies"
      />
      <RadioButton
        name="airline"
        value="emirates"
        checked={selectedAirline === 'emirates'}
        onChange={handleRadioChange}
        label="Emirates Airlines"
      />
      <RadioButton
        name="airline"
        value="qatar"
        checked={selectedAirline === 'qatar'}
        onChange={handleRadioChange}
        label="Qatar Airlines"
      />
      <RadioButton
        name="airline"
        value="etihad"
        checked={selectedAirline === 'etihad'}
        onChange={handleRadioChange}
        label="Etihad Airlines"
      />
    </div>
  );
};

export default RadioRange;
