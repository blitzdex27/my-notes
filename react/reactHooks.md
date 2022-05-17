Synopsis: React Hooks

Instructor: Eve Porcello
Date and time started: 2021-05-12 12:15 PM CST
Date and time finished:

Synopsis:
The course covers the common hooks used in react. 

The student is required to be familiar with:
JavaScript
React
Installing packages with npm

The end goal of the course is to be familiar with using hooks.

Course resources are included and can be downloaded.
Hooks
Hooks are functions. It can be used to handle state, fetch data, and interact with browser api. f
Can also be used to create functions that can be shared across files and projects for reusability.

Hooks starts with “use”
Hook: useState
Handles state of a function component variable. 
  const [data, setData] = useState({name: 'Dex'});
data is the state variable
setData is the function that changes the state
The parameter of useState is the initial value of the state.
Hook: useEffect
Allows the use of side effects within the function component.

A hook that executes a function when defined state is changed. If the second parameter is not defined it will be executed for any state that changes.
useEffect(() => {
  // some codes
}, [status]);
Return;
Hook: useReducer
Takes in the current state and returns a new state.
sample:
const [checked, toggle] = useReducer((checked) => !checked, false);
First parameter is a function that defines the new value when toggle is called.
Second parameter is the initial value.

useReducer function parameter with two arguments:
The second argument can be used to pass in a value to a setter function (incNumber in this case).
function App() {
  const [number, incNumber] = useReducer(
    (number, newNum) => number + newNum,
    0
  );
  return (
    <React.Fragment>
      <h1 onClick={() => incNumber(2)}>{number}</h1>
    </React.Fragment>
  );
}
Hook: useRef
Reach out to a component and determine its value. Useful with forms.
Sample
function App() {
  
  const sound = useRef()
  const color = useRef()
 
  const submit = (e) => {
    e.preventDefault()
    const soundVal = sound.current.value
    const colorVal = color.current.value
    alert(`${soundVal} sounds like ${colorVal}`)
  }
  return (
    <form onSubmit={submit}>
      <input ref={sound} type="text" placeholder="Sound..." />
      <input ref={color} type="color" />
      <button>ADD</button>
    </form>
  );
}
You can also do this using useState and this will be called a controlled component. Where you handle form input using state variables.

Custom hooks
Custom hooks can be created when there is a repeating pattern of codes such as when using  useState when controlling the data from the forms. It is more like a custom module with useState imported within. Common custom hooks are useInput, useFetch, etc.
Custom hook sample: useInput.js
Create useInput.js
import { useState } from "react";
 
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
 
  return [
    { value: value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
}
 
export default useInput
Import and use within the index.js
import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";
// import App from "./App";
 
function App() {
  const [nameProps, resetName] = useInput("");
  const [emailProps, resetEmail] = useInput("");
  const [data, setData] = useState(null);
 
  const submit = (event) => {
    event.preventDefault();
    const { value: name } = nameProps;
    const { value: email } = emailProps;
    setData({
      name,
      email,
    });
    resetName();
    resetEmail();
  };
 
  return (
    <>
      <form onSubmit={submit}>
        <input {...nameProps} placeholder="Name"></input>
        <br />
        <input {...emailProps} placeholder="Email"></input>
        <br />
        <button>Submit</button>
      </form>
      <p>Name: {data ? data.name : null}</p>
      <p>Email: {data && data.email}</p>
    </>
  );
}
 
ReactDOM.render(<App />, document.getElementById("root"));
 
Custom Hook Sample: useFetch.js
// if the data isn't available yet but is loading
// if we get the data
// if there's an error
 
import { useState, useEffect } from "react";
 
export function useFetch(uri) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
 
  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);
  return {data, loading, error}
}
index.js
import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import { useFetch } from "./useFetch";
 
function App() {
  const login = "blitzdex27";
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
 
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
 
ReactDOM.render(<App />, document.getElementById("root"));
 
 
 



createContext and useContext
Allows the data/values to be available to all child components. 

How to define a context
import createContext from ‘react’ module
Store the createContext() within a variable and export it (e.g. SomeContext)
Enclose the child components within that variable.Provider (e.g. <SomeContext.Provider>)
Add the data/values you need to be accessed by the child components within the properties of the provider (e.g. <SomeContext.Provider value={{someVariable}}>
Sample: index.js
import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
 
export const TreesContext = createContext();
 
const trees = [
  { id: 1, type: "Maple" },
  { id: 2, type: "Narra" },
  { id: 3, type: "Oak" },
];
 
ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById("root")
);
 
How to access the context data:
Import the useContext from the ‘react’ 
Import the custom context you defined on the parent component (e.g. import {someContext} from ‘./’
Retrieve the data using the useContext method
const { someVariable } = useContext(someContext)
Sample: App.js
import React, { useContext } from "react";
import { TreesContext } from "./";
 
function App() {
  const { trees } = useContext(TreesContext);
  return (
    <div>
      <h1>Trees</h1>
      <ul>
        {trees.map((tree) => (
          <li>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;
 



