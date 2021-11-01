import React from "react";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import { useState } from "react/cjs/react.development";
import SumCounter from "./SumCounter";

function MultiCounter() {
    const [counterSize, setCounterSize] = useState(0);
    const [counterSum, setCounterSum] = useState(0);

    function updateCounterSize(size) {
        setCounterSize(size)
        setCounterSum(0);
    }

    function updateSum(sum) {
        setCounterSum(sum);
    }

    return (
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize} />
            <CounterGroup counterSize={counterSize} updateSum={updateSum}/>
            <SumCounter counterSum = {counterSum}></SumCounter>
        </div>
    );
}

export default MultiCounter;