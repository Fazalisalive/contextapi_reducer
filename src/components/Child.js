import React, { useContext } from 'react';
import CounterContext from '../api/CounterContext';

const Child = () => {
    let counterValue = useContext(CounterContext)
    
    return(
        <div>
            <h2>This is 1st Child Using Counter Context</h2>
            <br />
            <h2>Counter value is: {counterValue[0]}</h2>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Context Increment</button>
        </div>
    );

};

export default Child;