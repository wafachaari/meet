import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mount } from 'enzyme';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = mount(<App />);
  });

  test('An event element is collapsed by default', ({ given, when, then }) => {

    given('the main page has loaded events.', () => {
    });

    when('he user first views the list of events', () => {
       
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);

        });

    then('the user should see the main page', () => {
      const EventWrapper = AppWrapper.find(Event);
       expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      expect(EventWrapper.find('.show_event')).toHaveLength(0);
    
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {

    given('the user see different event', () => {
    });

    when('the user click on the button to expand an event', () => {
      AppWrapper.find('.show_btn').at(0).simulate('click');
    });

    then('the user should see the details of the chosen event.', () => {
      expect(AppWrapper.find('.show_event').at(0)).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user see the details of the chosen event.', () => {

    });

    when('the user click on the button to hide an event', () => {
      AppWrapper.find('.show_btn').at(0).simulate('click');
    });

    then('the user should see the main page.', () => {
      expect(AppWrapper.find('.show_event').at(0)).toHaveLength(0);

    });
  });

});