import React, { Component } from 'react';

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

      });
    }
  }

  render() {
    let { eventsPerPage } = this.state;
    return (
      <div className="numberEvents">
        <h1>choose number</h1>
        <input
          type="text"
          className="number"
          placeholder="32"
          value={eventsPerPage}
          onChange={this.handleLength}
        />
        <ul className="numberlist">
        </ul>
      </div>

    );
  }
}
export default NumberOfEvents;