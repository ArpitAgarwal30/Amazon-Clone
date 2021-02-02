import React, {createContext, useContext, useReducer} from 'react';


// This will create our global data layer for storing the data
export const StateContext = createContext();

// This will wrap up our app with the data layer
export const StateProvider = ({ reducer, initialState, children})=>{
    return(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
};
// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);