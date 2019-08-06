import React, { useState, useEffect } from 'react';
// hospital card component
import HospitalCard from './components/hospital-card/hospital-card.component';
// hospital data type
import { HospitalDisplayData } from './interfaces/global-interfaces.interface';
// geolocation service functions
import { findNearestHospital, createHospitalObj } from './services/geolocation';
// app css
import './App.css';

const App: React.FC = () => {
  // [state for Hospital, hospitalStateSetter] = state initializer
  const [directionsToHospital, setDirectionsToHospital] = React.useState<HospitalDisplayData>();
  // IP geolocation options object, passed to getCurrentPosition();
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  // error callback function, passed to getCurrentPosition();
  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  // call checkForGeoLocation() on application load, functional equivalent to componentDidMount(); but for functional components
  useEffect(() => {
    // call geolocation onload
    checkForGeoLocation()
  }, []);
  // check for web context and call getUserPosition() to get user coordinates;
  const checkForGeoLocation = (): void => {
    if (window && window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(getUserPosition, error, options);
    }
  }
  // with user coordinates call geolocation service to find closest hospital and set hospital data to state
  const getUserPosition = (pos: any) => {
    if (pos) {
      // @ts-ignore
      setDirectionsToHospital(createHospitalObj(pos.coords.latitude, pos.coords.longitude, findNearestHospital(pos.coords.latitude, pos.coords.longitude)));
    }
  }
  // pass hospital display data state to hospital card component
  return (
    <div className="App">
      <HospitalCard nearestHospital={directionsToHospital} />
    </div>
  );
}

export default App;
