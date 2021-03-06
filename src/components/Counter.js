import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/sumSlice'
import '../styles/Counter.css';

function Counter(props) {
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

    function increase() {
        setNumber(number + 1);
        dispatch(increment());
    }

    function decrease() {
        setNumber(number - 1);
        dispatch(decrement());
    }

    return (
        <div className="Counter">
            <button className="Counter-Button" onClick={increase}>+</button>
            <span>{number}</span>
            <button className="Counter-Button" onClick={decrease}>-</button>
        </div>
    )
}

export default Counter;