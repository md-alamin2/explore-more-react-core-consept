import { useState } from "react"

export default function Bowler(){
    const [balls, setBalls] = useState(0);
    const handleRightBall = () =>{
        const updatedBall = balls + 1;
        setBalls(updatedBall)
    }
    const handleWideBall = () =>{
        const updatedBall = balls + 0;
        setBalls(updatedBall)
    }
    const handleNoBall = () =>{
        const updatedBall = balls + 0;
        setBalls(updatedBall)
    }
    return(
        <div>
            <h1>Bowler: Bangladeshi bowler</h1>
            <h2>Ball count: {balls}</h2>
            
            <button onClick={handleRightBall}>Right ball</button>
            <button onClick={handleWideBall}>Wide ball</button>
            <button onClick={handleNoBall}>No ball</button>
        </div>
    )
}