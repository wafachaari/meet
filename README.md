# meet

Objective:To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events

FEATURE 1: FILTER EVENTS BY CITY
user story
As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
User story
As a User,
I should be able to click on a button to show or hide an event detail.
So that I can see more ot less details of an event.

Scenario 1: An event element is collapsed by default
Given the main page has loaded events.
When the user choose a city
Then the user should see the main page

Scenario 2: User can expand an event to see its details
Given the user see different event
When the user click on the button to expand an event
Then the user should see  the details of the chosen event.

Scenario 3: User can collapse an event to hide its details
Given the user see the details of the chosen event.
When the user click on the button to hide an event
Then the user should see  the main page.

 FEATURE 3: SPECIFY NUMBER OF EVENTS
User story
As a User,
I should be able to  write the number of events that I want to see.
So that I can see a specified number of events on the screen.

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given When user hasn’t specified a number.
When the user The user loads the list of events
Then the user should see   32 events by default.

Scenario 2: User can change the number of events they want to see
Given user hasn’t specified a number
When the user want to change number of events
Then the user should see event element with given number of events user choose

 FEATURE 4: USE THE APP WHEN OFFLINE
User story
As a user
I should be able to use the app when offline
So that I can see the events I wanted to attend even with no internet 

Scenario 1: Show cached data when there’s no internet connection
Given there is no internet connection
When the user want to see data
Then the user should see cached data

Scenario 2: Show error when user changes the settings (city, time range)
Given user has no internet connection
When the user want to change the settings
Then the user should see  error

FEATURE 5: DATA VISUALIZATION
User story
As a user
I should be able to see a chart with event data
So that I can see the all events happening in the city at one time 

Scenario 1: Show a chart with the number of upcoming events in each city
Given  the user is using the app with multiple cities in scope
When the user click on a button to see different upcoming events in each city
Then the user should see  a chart with the number of upcoming events in each city


