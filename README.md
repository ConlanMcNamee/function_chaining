# Function_chaining (more of a proof of concept)

The purpose of this repository is to work on chaining some arbitrary functions on the response object from a front end GET request, done through app.use on the server side.

It will check the request object for the relevant information and run functions on the data if it is present or not run if it is not. Then we attach the proper responses to the response object and send them back regardless of what data we were initially given.

The functions being run on the data are very simplistic but hopefully this concept still conveys the possibilities for chaining functions in this way.

Some examples could be:
* Using one master function to check/process data through multiple routes (being as DRY as possible)
* Processing data on some number of routes even if some of the data is missing
