import React from 'react';
import CitySearch from './CitySearch';
import './App.css';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
//import Event from './Event';
import { Component } from 'react';
import "./nprogress.css";

import { getEvents, extractLocations } from './api';
class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsPerPage: 6,
  }
  componentDidMount() {
    this.mounted = true;
    const { eventsPerPage } = this.state;

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, eventsPerPage),
          locations: extractLocations(events)


        });
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
      const { eventsPerPage } = this.state;
      this.setState({
        events: locationEvents.slice(0, eventsPerPage)
      }); 
      //console.log(events);
    });

  }
  updateEventCount = (eventCount) => {

    this.setState({
      eventsPerPage: eventCount
    });
    console.log(eventCount);
  }

  render() {
    return (

      <div className="App">
        <NumberOfEvents eventsPerPage={this.state.eventsPerPage} updateEventCount={this.updateEventCount} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />

      </div>
    );
  }
}
export default App;
