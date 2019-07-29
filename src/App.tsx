import React, { useState, useEffect } from 'react';
import AppHeader from './components/header/header.component';
import HospitalCard from './components/card/hospital-card.component';
import SearchButton from './components/button/search-button.component';
import { HospitalDisplayData } from './interfaces/global-interfaces.interface';
import checkForGeoLocation, { getUserPosition } from './services/geolocation';
import hospitalData from './data/hospitals_2018-09.json';
import { createHospitalObj } from './../service/geolocation';


import './App.css';

const App: React.FC = () => {
  const [directionsToHospital, setDirectionsToHospital] = React.useState<HospitalDisplayData>();

  useEffect(() => {
    // kick off service here
    checkForGeoLocation()
  }, []);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const checkForGeoLocation = (): void => {
    if (window && window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(getUserPosition, error, options);
    }
  }

  // get user position
  const getUserPosition = (pos: any) => {
    if (pos) {
      // @ts-ignore
      setDirectionsToHospital(this.createHospitalObj.createHospitalObj(pos.coords.latitude, pos.coords.longitude, findNearestHospital(pos.coords.latitude, pos.coords.longitude)));
    }
  }

  return (
    <div className="App">
      <HospitalCard nearestHospital={directionsToHospital} />
    </div>
  );
}

export default App;
