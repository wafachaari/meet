import React, { Component } from "react";

class Event extends Component {

  state = {
    show: false,
  }

  handledetails = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    const event = this.props.event;
    const eventISODateTime = new Date(event.start.dateTime);
    const dateTime = eventISODateTime.toDateString();
    return (
      <div className="Event">
        <div>
          <h2> {event.summary}</h2>
          <p>{dateTime} @TIMEZONE {event.start.timeZone}</p>
          <p> @ {event.summary} / {event.location}</p>
        </div>
        {
          this.state.show && (
            <div className="show_event">
              <h3> About event:</h3>
              <p className="description">{event.description}</p>
            </div>
          )
        }

        <div className="event-button"><button
          className="show_btn"
          type="text"
          onClick={() => this.handledetails()}
        >
        </button>
        </div>
      </div>
    );
  }
}
export default Event;