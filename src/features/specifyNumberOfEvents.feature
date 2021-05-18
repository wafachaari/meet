 

Feature: SPECIFY NUMBER OF EVENTS
 
Scenario: When user hasn’t specified a number, 32 is the default number.
Given When user hasn’t specified a number.
When the user The user loads the list of events.
Then 32 events will be displayed per page.

Scenario: User can change the number of events they want to see.
Given user hasn’t specified a number.
When the user want to change number of events.
Then the user should see event element with given number of events user choose.