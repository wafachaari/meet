
import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {

    const events = this.props.events;
    return (
      <div className="EventList">
        <ul className="list">
          {events.map(event =>
            <li className="li" key={event.id}>
              <Event event={event} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}
export default EventList;

