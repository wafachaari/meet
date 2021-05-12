import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false,
  }

  handledetails = () => {
    this.setState ( {
      show:!this.state.show,
    })
  }

  render() {
    const { event } = this.props;
    return(
    <div className='event_container'>
      <h1>eventt</h1>
      <h1>{event.summary}</h1>
      <p>{event.start}</p>
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