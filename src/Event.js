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
    return (
      <div className="Event">

        <h1>event</h1>
        <h2> {event.summary}</h2>
        <p>{event.location}</p>
        <button
          className="show_btn"
          onClick={() => this.handledetails()}
        >
          {!this.state.show ? 'Show Details' : 'Hide Details'}
        </button>
        {this.state.show && (
          <div className="show_event">
            <h2> About event:</h2>
            <p>{event.description}</p>
          </div>
        )}


      </div>
    );
  }
}
export default Event;