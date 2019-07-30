import React, { useState, useEffect } from 'react';
import HospitalCard from './components/hospital-card/hospital-card.component';
import { HospitalDisplayData } from './interfaces/global-interfaces.interface';
import { findNearestHospital, createHospitalObj } from './services/geolocation';
import './App.css';

const App: React.FC = () => {
  const [directionsToHospital, setDirectionsToHospital] = React.useState<HospitalDisplayData>();

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    // kick off service here
    checkForGeoLocation()
  }, []);

  const checkForGeoLocation = (): void => {
    if (window && window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(getUserPosition, error, options);
    }
  }

  // get user position
  const getUserPosition = (pos: any) => {
    if (pos) {
      // @ts-ignore
      setDirectionsToHospital(createHospitalObj(pos.coords.latitude, pos.coords.longitude, findNearestHospital(pos.coords.latitude, pos.coords.longitude)));
    }
  }

  return (
    <div className="App">
      <HospitalCard nearestHospital={directionsToHospital} />
    </div>
  );
}

export default App;
