import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const handleSingle = () =>{
        const updatedRun= runs+1;
        setRuns(updatedRun)
    }
    const handleFour = () =>{
        const updatedRun= runs+4;
        setRuns(updatedRun)
    }
    const handleSix = () =>{
        const updatedRun= runs+6;
        setRuns(updatedRun)
    }
    return(
        <div>
            <h3>Player: Bangladesi player</h3>
            <h1>Score:{runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}