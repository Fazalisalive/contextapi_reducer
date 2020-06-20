import React, { useReducer } from 'react';
import counterReducer from '../Reducers/CounterReducer';


const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer, 1)


    return (
        <div>
            <h2>This is 2nd Child Using Counter Reducer</h2>
            <br />
            <h2>Reducer's Value: {state}</h2>
            <button onClick={() => {dispatch('INCREMENT')}}>Reducer Increment</button>

        </div>
    );
};

export default Child2;