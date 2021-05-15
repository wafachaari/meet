import React from 'react';
import CitySearch from './CitySearch';
import './App.css';
 
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
 
import Event from './Event';
function App() {
  return (
    <div className="App">
      <EventList />
       <CitySearch/>
       <Event/>
       <NumberOfEvents/>
     
    </div>
  );
}

export default App;
