# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


## Ticket 1
every key will have a unique id on the database, 
the `getShiftsByFacility` is called by the id and returns the info from the database on shifts and stuffs, 
this is a middleware function inside of `generateReport`, is then called with the list of Shifts. converting them into a pdf

instead of saving them into a database and printing into pdf, start by creating a server, create routes for the Facility to be able to create an account and login on the server and  

- first route for the create account

- second for login to be able to perform actions 

- third route for the scheduling/recording work

- then fourth route for the infromation to be displayed on shifts on work record 


## Ticket 2

- create a function `userShiftsId` that saves the data passed as an object(being the ID) which contains the name, time and other information on shifts into a databsae including the information of the facility 

- on the login route the function `checkAuthenticated`(being a middle) is passed as an argument to check if the user isn't found he gets a `404` error, if he is then he proceeds further into the schedule page 


## Ticket 3

- on the schedule route/page there's a function `scheduleShift` is created which saves the info into the database  

when the person on session/facility logs in he/she a function `checkAuthenticated`(which checks if the person is authenticated registered and if found on the database) is passed as a middleware into the `getShiftsInfo` which is directly called by a click to get information on shifts being passed as an argument into the `info.ejs` page
## Ticket 4
   
- information on the info page i.e the shifts `info.ejs` page will be shown only if such a user is found on the database because it's taking `getShiftsInfo` as a callback which has the person that is being requested from the `info.ejs` page calling that person from the database then there's another function `myData` revealing or pulling data about that user into. with `myData` passed as a callback into `getShiftsInfo` 




