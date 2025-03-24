
import './App.css'
import Counter from './counter'
import Batsman from './batsMan'
import Bowler from './Bowler'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'


// const loadData = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

// const fetchFriends = async () =>{
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json()
// }

const fetchPosts = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

function App() {

  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();


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

      <Suspense fallback={<p>Loading posts....</p>}>
        <Posts postsPromise= {postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
      <Users loadData={loadData}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

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
