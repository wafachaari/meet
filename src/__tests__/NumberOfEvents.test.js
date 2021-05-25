import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from "../mock-data";
 

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
       NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventCount={() => {}} />);
  });
  
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const eventsPerPage = NumberOfEventsWrapper.state('eventsPerPage');
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(eventsPerPage);
  });


  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      eventsPerPage: '32'
    });
    const eventObject = { target: { value: '32' } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventsPerPage')).toBe('32');
  });


});