import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
class NumberOfEvents extends Component {
  state = {
    eventsPerPage: 6,
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
    console.log(number);
    this.props.updateEventCount(number);
  }

  render() {
    // let { eventsPerPage } = this.state;
    return (
      <div className="NumberOfEvents">
       <label>choose number of events</label>
        <input
          type="number"
          className="number"
          placeholder="6"
          value={this.state.eventsPerPage}
          onChange={this.handleLength}
        />
        <ErrorAlert text={this.state.errorText} className="erroralert"/>

      </div>

    );
  }
}
export default NumberOfEvents;