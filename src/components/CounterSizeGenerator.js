import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { setSizeByAmount } from '../slices/sizeSlice'
import '../styles/CounterSizeGenerator.css'

function CounterSizeGenerator() {
    const [counterSize, setCounterSize] = useState(0);
    const dispatch = useDispatch();

    function handleChangeSize(event) {
        const newValue = parseInt(event.target.value) || 0;
        setCounterSize(newValue);
    }

    function generateCounter() {
        dispatch(setSizeByAmount(counterSize));
    }

    return (
        <div className="CounterSizeGenerator">
            <span>Size:</span>
            <input
                className="CounterSizeGenerator-input"
                min="0"
                type="number"
                value={counterSize}
                onChange={handleChangeSize}
            >

            </input>
            <button className="CounterSizeGenerator-button" onClick={generateCounter}>generate</button>
        </div>
    );
}

export default CounterSizeGenerator;