import React from "react";

import ComponentLifeCycle from "./components/ComponentLifeCycle";
import UseStateClassComponent from "./components/UseStateClassComponent";
import ErrorBoundary from "./components/ErrorBoundary";

import UserContext from "./store/user-context";

const DUMMY_DATA = [
  {
      id: 1,
      name: 'First'
  },
  {
      id: 2,
      name: 'Second'
  },
  {
      id: 3,
      name: 'Third'
  }
];

function App() {
  
  const userContext = {
    users: DUMMY_DATA
  }

  return (
    <UserContext.Provider value={userContext}>
      <ErrorBoundary>
        <UseStateClassComponent />
        <hr />
        <ComponentLifeCycle />
      </ErrorBoundary>
    </UserContext.Provider>
  );
}

export default App;
