import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mount } from 'enzyme';
 
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
defineFeature(feature, test => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = mount(<App />);
  });
  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    given('When user hasn’t specified a number.', () => {
    });
    when('the user The user loads the list of events.', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.list li')).not.toBeNull;
    });
    then(/^(\d+) events will be displayed per page.$/, (arg0) => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(3);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    given('user hasn’t specified a number.', () => {
    });
    when('the user want to change number of events.', () => {
      const numberOfEvents = { target: { value: 4 } };
      AppWrapper.find(".number").simulate("change", numberOfEvents);
    });
    then('the user should see event element with given number of events user choose.', () => {
      expect(AppWrapper.find('.list li')).toHaveLength(3);
    });
  });

});