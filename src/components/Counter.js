import React, { useState } from "react";

function Counter(props) {
    const [number, setNumber] = useState(0);

    function increase() {
        setNumber(number + 1);
        props.updateSum(1);
    }

    function decrease() {
        setNumber(number - 1);
        props.updateSum(-1);
    }

    return (
        <div>
            <button onClick={increase}>+</button>
            <span>{number}</span>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Counter;