import React from "react";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import SumCounter from "./SumCounter";

function MultiCounter() {
    return (
        <div>
            <CounterSizeGenerator />
            <CounterGroup />
            <SumCounter />
        </div>
    );
}

export default MultiCounter;