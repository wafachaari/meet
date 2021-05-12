import React from 'react';
import { shallow } from 'enzyme';
 import Event from '../Event';
import { mockData } from '../mock-data';
 
describe('<Event /> component', () => {
  let EventWrapper;

  beforeAll(() => {  
    const eventDetail=mockData[0];
    EventWrapper = shallow(<Event event={eventDetail} />);
  });

  test('renders a list of details', () => {
    expect(EventWrapper.find('.event_container')).toHaveLength(1);
  });

  test('render show event details', () => {
    EventWrapper.find('.show_btn').simulate('click');
    expect(EventWrapper.find('.show_event')).toHaveLength(1);
    
  });

  test('render hide event details', () => {
    EventWrapper.find('.show_btn').simulate('click');
    expect(EventWrapper.find('.show_event')).toHaveLength(0);
  });

});
