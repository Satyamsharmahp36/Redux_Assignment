import { createStore } from "redux";
import { Reducer } from "./redux/Reducer";
import { Increment } from "./redux/Action";
import { Decrement } from "./redux/Action";
import { useState } from "react";

const store=createStore(Reducer);

export default function LikeCounter(){
    const[state,setState]=useState(0);
    
    store.subscribe(()=> setState(store.getState().count))
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={()=>store.dispatch(Increment())}>Increment</button>
            <button onClick={()=>store.dispatch(Decrement())}>Decrement</button>
        </div>
    )
}


