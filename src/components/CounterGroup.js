import React from "react";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Counter from "./Counter";

function CounterGroup(props) {
    const [counterList, setCounterList] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const counters = new Array(props.counterSize).fill(Date.now());
        setCounterList(counters);
        setTotalCount(0);
    }, [props.counterSize]);

    function updateSum(add) {
        setTotalCount(totalCount + add);
        props.updateSum(totalCount + add)
    }

    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index} updateSum={updateSum} />
            ))}
        </div>
    );
}

export default CounterGroup;