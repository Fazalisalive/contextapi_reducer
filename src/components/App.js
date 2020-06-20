import React, { useState } from 'react';
import Parent from './Parent'
import CounterContext from '../api/CounterContext';


export default function App() {

    let countState = useState(1) // countState: [count, setCount]
  

    
    return (
        <CounterContext.Provider value={countState}>
            <div>
                <Parent />
            </div>
        </CounterContext.Provider>
        
    );
}