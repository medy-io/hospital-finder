import React from 'react';
import AppHeader from './components/header/header.component';
import FlightSelect from './components/switcher/switcher.components';
import FlightSearch from './components/search/search.component';
import FlightCard from './components/card/flight-card.component';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader/>
      <FlightSelect/>
      <FlightSearch/>
      <FlightCard/>
    </div>
  );
}

export default App;
