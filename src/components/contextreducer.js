import React, { createContext, useContext, useReducer } from 'react'

const cartstatecontext=createContext();
const cartdispatchcontext=createContext();

const reducer =(state,action)=>{
    switch(action.type){
        case "ADD":
            return[...state,action.payload]
        default:
            console.log("error in Reducer");
            return state;
    }
}


export const CartProvider =({children})=>{
    const initialState = [];
    const [state,dispatch] =useReducer(reducer,initialState)
    return(
        <cartdispatchcontext.Provider value={dispatch}>
            <cartstatecontext.Provider value={state}>
                {children}
            </cartstatecontext.Provider>
        </cartdispatchcontext.Provider>
    )
}


export const UseCart = () =>useContext(cartstatecontext);
export const UseDispatchCart = ()=> useContext(cartdispatchcontext);