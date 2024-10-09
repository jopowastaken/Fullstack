import { useState } from 'react'

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const Button = ({ handleClick, text }) => {
  console.log("NAPPI")
  return <button onClick={handleClick}>{text}</button>
}

const mostVotes = (points) =>{
  return Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);

}



const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ];
  
  let [selected, setSelected] = useState(0)
  console.log(selected)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  })

  const vote = () => {
    const newPoints = { ...points };
    newPoints[selected] += 1;
    setPoints(newPoints);
  }

  return (
    <div>
      <h1>anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      <p>Has {points[selected]} votes!</p>
      <br />
      <Button handleClick={vote} text="Vote!"/>
      <Button handleClick={() => setSelected(getRandomArbitrary(0, 7))} text="Next anecdote"/>
      <h1>Anecdoti with most votes</h1>
      <p>{anecdotes[mostVotes(points)]}</p>
      
    </div>
  )
}

export default App