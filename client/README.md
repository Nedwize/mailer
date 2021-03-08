## Notes - Frontend

- Delete everything.
- index.js handles Redux
- App.js handles routing
- Action Creators in Redux are somewhere we create change in the Redux side of our application. They are used to modify the state that is contained inside our Redux store.
- To hook up a component to Redux Store

  - import connect helper from react-redux
  - Define map state to props function
  - Pull out pieces of state to use in the particular component

- Redux connect method lets you get the global state of the client
- Use connect method with mapStateToProps function to get the state
- Whenever we define the mapStateToProps function, whatever we return from that function is passed as state to the component
