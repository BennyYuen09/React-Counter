import React from "react";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import { useState } from "react/cjs/react.development";
import SumCounter from "./SumCounter";
import { useDispatch } from 'react-redux'
import { setByAmount } from '../slices/sumSlice'

function MultiCounter() {
    const [counterSize, setCounterSize] = useState(0);
    const dispatch = useDispatch();

    function updateCounterSize(size) {
        setCounterSize(size);
        dispatch(setByAmount(0));
    }

    return (
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize} />
            <CounterGroup counterSize={counterSize}/>
            <SumCounter></SumCounter>
        </div>
    );
}

export default MultiCounter;