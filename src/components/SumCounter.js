import React from "react";
import { selectSum } from '../slices/sumSlice'
import { useSelector } from 'react-redux'
import '../styles/SumCounter.css';

function SumCounter() {
    const sum = useSelector(selectSum);
    return (
        <div className="SumCounter">
            <span>Sum: {sum}</span>
        </div>
    )
}

export default SumCounter;