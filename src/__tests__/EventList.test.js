 
import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';
 
describe('<EventList />', () => {
    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events={ mockData } />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
       // const EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />);
    });
});
