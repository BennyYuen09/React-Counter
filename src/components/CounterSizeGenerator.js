import React from "react";
import { useState } from "react/cjs/react.development";
import { useDispatch } from 'react-redux'
import { setByAmount } from '../slices/sizeSlice'
import '../styles/CounterSizeGenerator.css'

function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);
    const dispatch = useDispatch();

    function handleChangeSize(event) {
        //event.target.value => string

        const newValue = parseInt(event.target.value) || 0;
        setSize(newValue);
        dispatch(setByAmount(newValue));     
    }

    function generateCounter() {
        props.updateCounterSize(size);
    }

    return (
        <div className="CounterSizeGenerator">
            <span>Size:</span>
            <input
                className="CounterSizeGenerator-input"
                min="0"
                type="number"
                value={size}
                onChange={handleChangeSize}
            >

            </input>
            <button className="CounterSizeGenerator-button" onClick={generateCounter}>generate</button>
        </div>
    );
}

export default CounterSizeGenerator;