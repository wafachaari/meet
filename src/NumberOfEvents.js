import React, { Component } from 'react';

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
      });   
    }
    console.log(number);
    this.props.updateEventCount(number);
  }

  render() {
   // let { eventsPerPage } = this.state;
    return (
      <div className="NumberOfEvents">
        <h1>choose number</h1>
        <input
           type="number"
          className="number"
          placeholder="6"
          value={this.state.eventsPerPage}
          onChange={this.handleLength}
        />
        
      </div>

    );
  }
}
export default NumberOfEvents;