
import './App.css'
import Counter from './counter'
import Batsman from './batsMan'
import Bowler from './Bowler'


function App() {
  function handleClick() {
    return alert("Fuck You")
  }
  const click2 = () => {
    return alert("Fuck You Too")
  }
  const add10 = (num) => {
    const newNum = num + 10;
    return alert(newNum);
  }
  return (
    <>

      <h1>Vite + React</h1>
      <Bowler></Bowler>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click here</button>
      <button onClick={click2}>Click here</button>
      <button onClick={() => add10(20)}>Add 10</button>
    </>
  )
}

export default App
