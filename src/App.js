import React from 'react';
import CitySearch from './CitySearch';
import './App.css';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
//import Event from './Event';
import EventGenre from './EventGenre';
import { Component } from 'react';
import { OfflineAlert } from './Alert';
import "./nprogress.css";

import { getEvents, extractLocations } from './api';
class App extends Component {
  state = {
    currentLocation: 'all',
    events: [],
    locations: [],
    showevents: false,
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
            offlinealert: 'Cached data is being displayed.'
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
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return { city, number };
    })
    return data;
  };
  downevents = () => {
    this.setState({
      showevents: !this.state.showevents
    })
  }

  render() {
    return (
      <div className="App">
        <header>𝔐𝔢𝔢𝔱𝔄𝔭𝔭</header>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents eventsPerPage={this.state.eventsPerPage} updateEventCount={this.updateEventCount} />

        {!this.state.showevents ?
          <button className="show-events-button" onClick={this.downevents}>show  events</button>
          :
          <button className="show-events-button" onClick={this.downevents}>hide events</button>
        }
        {this.state.showevents ?
          <div className="data-vis-wrapper">
            <EventGenre events={this.state.events} />
            <ResponsiveContainer height={400} >
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis
                  allowDecimals={false}
                  type="number"
                  dataKey="number"
                  name="number of events"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          : null}
        <OfflineAlert text={this.state.offlinealert} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}
export default App;
