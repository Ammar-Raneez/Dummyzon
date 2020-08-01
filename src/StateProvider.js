//setup data link
//to track basket

//*React context api is a solution to prop drilling (passing props from a component to another to another), just like redux
//*the solution basically is to make the states global access, so that any component can access it directly through something
//*called as the "Data layer"

import React,  { createContext, useReducer, useContext } from "react";

//the data link
export const StateContext = createContext();

//build a provider so that we can wrap the entire app, thereby giving access to this
export const StateProvider = ({ reducer, initialState, children }) => {
    //children refers to our app Component, we give our App access to StateContext 
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
}

//use the data link that we created
//this is how we use it inside of a component, this returns our state along with dispatch(action dispatcher, just like redux)
export const useStateValue = () => useContext(StateContext);