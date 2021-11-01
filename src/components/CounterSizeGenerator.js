import React from "react";
import { useState } from "react/cjs/react.development";

function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        //event.target.value => string

        setSize(parseInt(event.target.value) || 0);     
    }

    function generateCounter() {
        props.updateCounterSize(size);
    }

    return (
        <div>
            <span>Size:</span>
            <input
                min="0"
                type="number"
                value={size}
                onChange={handleChangeSize}
            >

            </input>
            <button onClick={generateCounter}>generate</button>
        </div>
    );
}

export default CounterSizeGenerator;