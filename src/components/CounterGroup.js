import React from "react";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Counter from "./Counter";
import { setSumByAmount} from "../slices/sumSlice"
import { selectSize } from '../slices/sizeSlice'
import { useSelector, useDispatch } from 'react-redux'

function CounterGroup() {
    const [counterList, setCounterList] = useState([]);
    const dispatch = useDispatch();
    const size = useSelector(selectSize);

    useEffect(() => {
        const counters = new Array(size).fill(Date.now());
        setCounterList(counters);
        dispatch(setSumByAmount(0));
    }, [size, dispatch]);

    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index}/>
            ))}
        </div>
    );
}

export default CounterGroup;