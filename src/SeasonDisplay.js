import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  Summer: {
    textColor: 'black',
    text: 'Lets hit the beach!',
    iconName: 'sun',
  },
  Winter: {
    textColor: '#0E6EB8',
    text: 'Burr... It is Chilly!',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  }
  return lat > 0 ? 'Winter' : 'Summer';
};

const SeasonDisplay = (props) => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
  const { text, textColor, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`}></i>
      <h1 style={{ color: textColor, fontWeight: 'bold' }}>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;
