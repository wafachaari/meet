Feature: Show/Hide an events details
Scenario: An event element is collapsed by default
Given the main page has loaded events.
When he user first views the list of events
Then the user should see the main page

Scenario: User can expand an event to see its details
Given the user see different event
When the user click on the button to expand an event
Then the user should see the details of the chosen event.

Scenario: User can collapse an event to hide its details
Given the user see the details of the chosen event.
When the user click on the button to hide an event
Then the user should see the main page.