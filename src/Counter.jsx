import { useState } from "react";

function Counter ({startValue, color}) {
    const [count, setCount] = useState(startValue);

    return (
        <div style={{ color: color }}>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default Counter;