import { useState } from "react"

export default function Counter(){
    const [count, steCount] = useState(0);
    const handleCount = () =>{
        const newCount = 1+ count;
        steCount(newCount);
    }
    const counterStyle={
        border: "2px solid blue"
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleCount}>Add</button>
        </div>
    )
}