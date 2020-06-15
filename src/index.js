import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const renderComponent = (lat, errMessage) => {
  if (lat && !errMessage) {
    return <SeasonDisplay lat={lat} />;
  } else if (errMessage && !lat) {
    return <div>Error: {errMessage}</div>;
  }

  return <Spinner message="Please accept the location request" />;
};

const App = () => {
  const [lat, setLat] = useState(null);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => setLat(postion.coords.latitude),
      (error) => setErrMessage(error.message)
    );
  }, []);

  return renderComponent(lat, errMessage);
};

ReactDom.render(<App />, document.querySelector('#root'));
