import React from "react";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Counter from "./Counter";

function CounterGroup(props) {
    const [counterList, setCounterList] = useState([]);

    useEffect(() => {
        const counters = new Array(props.counterSize).fill(Date.now());
        setCounterList(counters);
    }, [props.counterSize]);

    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index} />
            ))}
        </div>
    );
}

export default CounterGroup;