import React from 'react';
import CitySearch from './CitySearch';
import './App.css';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import Event from './Event';
import { Component } from 'react';
import "./nprogress.css";

import { getEvents, extractLocations } from './api';
class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsPerPage:[]
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }
 



  render() {
    return (

      <div className="App">
          <NumberOfEvents eventsPerPage={this.state.eventsPerPage}/>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      
      </div>
    );
  }
}
export default App;
