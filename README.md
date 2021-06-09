## Demo

Nuvalence Address demo built in React

### Live demo
http://nuvalence-react-demo.com/

I managed to deploy the application on my private cloud using a new domain name. So anyone can have a visual idea.

### Steps to run locally

npm install 

npm start


### Summary

The application is a demo on Address book.
The list of users is fetched using `randomuser` API and displayed in the page. The details of particular user/address can be viewed on selecting one fromt the list

### Architecture
There are two main components/features:
1. AddressBook  => `/`
2. AddressDetails => `/details`

The components are functional and uses hooks for managing lifecycle events. 

The reducer is setup using redux toolkit.

`react-router-dom` used for routing to two different routes.

I have used `react-bootstrap` and accomplished most of the UI using reusable components with `styled-components`

I was able to setup and add reducer tests but I could'nt complete the tests on the components due to my schedule and timings.


### What more I could have accomplished

1. Would have added propTypes. I am not used to using the new reduxtoolkit so I believe the procedue is a little different
2. Completed unit test and add more tests 
3. Could have covered more edge cases
4. Add a spinner during async operations
