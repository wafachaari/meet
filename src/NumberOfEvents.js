import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventsPerPage: 32,
  };

  handleLength = (event) => {
    const number = event.target.value;
    if (number <= 0) {
      this.setState({
        eventsPerPage: number,
        errorText: 'Please select a valid number.'
      });
    } else {
      this.setState({
        eventsPerPage: number,
        errorText: ''
      });
    }
    this.props.updateEventCount(number);
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <label>choose number of events</label>
        <input
          type="number"
          className="number"
          placeholder="32"
          value={this.state.eventsPerPage}
          onChange={this.handleLength}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;