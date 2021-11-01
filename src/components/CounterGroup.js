import React from "react";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Counter from "./Counter";
import { selectSize } from '../slices/sizeSlice'
import { useSelector } from 'react-redux'

function CounterGroup(props) {
    const [counterList, setCounterList] = useState([]);
    const size = useSelector(selectSize);

    useEffect(() => {
        const counters = new Array(props.counterSize).fill(Date.now());
        setCounterList(counters);
    }, [props.counterSize]);

    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index}/>
            ))}
        </div>
    );
}

export default CounterGroup;