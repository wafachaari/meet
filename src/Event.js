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
    //const dateTime = (event.start.dateTime).toDateString();
    const eventISODateTime = new Date(event.start.dateTime);
    const dateTime = eventISODateTime.toDateString();
    return (
      <div className="Event">
        <h2> {event.summary}</h2>
        <p>{dateTime} @TIMEZONE {event.start.timeZone}</p>
        <p> @ {event.summary} / {event.location}</p>
        <button
          className="show_btn"
          type="text"
          onClick={() => this.handledetails()}

        >

          {/* /* {!this.state.show ? 'Show Details' : 'Hide Details'}*/}
        </button>
        {
          this.state.show && (
            <div className="show_event">
              <h3> About event:</h3>
              <p className="description">{event.description}</p>
            </div>
          )
        }</div>

    );
  }
}
export default Event;