import React, { useState } from 'react'


function UseState() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount( count => count + 1)
    }

    const handleDecrement = () => {
        setCount( count => count - 1)
    }

    return (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default UseState;