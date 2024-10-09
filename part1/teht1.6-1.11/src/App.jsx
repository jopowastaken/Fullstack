import { useState } from 'react'


const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = good+neutral+bad
  const average = all/3

  if(all==0){
    return <div>
    <h2>statistics</h2>
    <p>No feedback given</p>
    </div>
  }

  return <div>
    <h2>statistics</h2>
    <StatisticLine text="Good" value={good}/>
    <StatisticLine text="Neutral" value={neutral}/>
    <StatisticLine text="Bad" value={bad}/>
    <StatisticLine text="Average" value={average}/>
    <StatisticLine text="Positive" value={good/all*100+"%"}/>

  </div>
  }


  const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>
  }


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2>Give Feedback</h2>

      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="bad"/>

      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
       />

    </div>
  )
}

export default App