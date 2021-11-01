import React from "react";
import { selectSum } from '../slices/sumSlice'
import { useSelector } from 'react-redux'

function SumCounter(props) {
    const sum = useSelector(selectSum);
    return (
        <div>
            <span>Sum: {sum}</span>
        </div>
    )
}

export default SumCounter;