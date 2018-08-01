//import React from "react";
//import ReactDOM from "react-dom";

//import "./styles.css";

//function App() {
//  return (
///    <div className="App">
//      <h1>Hello CodeSandbox</h1>
//      <h2>Start editing to see some magic happen!</h2>
//    </div>
//  );
//}//

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUBTRACT":
      state = state - action.payload;
      break;
    case "MULTIPLY":
      state = state * action.payload;
      break;
  }
  return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 100
});

store.dispatch({
  type: "SUBTRACT",
  payload: 100
});

store.dispatch({
  type: "MULTIPLY",
  payload: 100
});
