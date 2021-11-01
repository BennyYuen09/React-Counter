import React from "react";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import { useState } from "react/cjs/react.development";

function MultiCounter() {
    const [counterSize, setCounterSize] = useState(0);
    const [counterSum, setCounterSum] = useState(0);

    function updateCounterSize(size) {
        setCounterSize(size)
    }

    function updateSum(sum) {
        setCounterSum(sum);
    }

    return (
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize} />
            <CounterGroup counterSize={counterSize} />
        </div>
    );
}

export default MultiCounter;