import React from 'react';
import CitySearch from './CitySearch';
import './App.css';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
//import Event from './Event';
import { Component } from 'react';
import { OfflineAlert } from './Alert';
import "./nprogress.css";

import { getEvents, extractLocations } from './api';
class App extends Component {
  state = {
    currentLocation: 'all',
    events: [],
    locations: [],
    eventsPerPage: 6,
  }
  componentDidMount() {
    this.mounted = true;
    const { eventsPerPage } = this.state;
    // window.addEventListener('online',);
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, eventsPerPage),
          locations: extractLocations(events)
        });
        if (!navigator.onLine) {
          this.setState({
            offlinealert: ' Cached data is being displayed.'
          })

        }
        else {
          this.setState({
            warningText: ''

          })
        }
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
        events: locationEvents.slice(0, eventsPerPage),
        currentLocation: location
      });
    });

  }
  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      eventsPerPage: eventCount
    });
    this.updateEvents(currentLocation);
  }

  render() {
    return (

      <div className="App">
        <header>𝔐𝔢𝔢𝔱𝔄𝔭𝔭</header>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents eventsPerPage={this.state.eventsPerPage} updateEventCount={this.updateEventCount} />
        <OfflineAlert text={this.state.offlinealert} className="alert-container" />
        <EventList events={this.state.events} />

      </div>
    );
  }
}
export default App;
