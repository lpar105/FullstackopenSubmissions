import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  
  let all = good + bad + neutral

  return(
    <>
    <h1>Statistics</h1>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={(good-bad)/all} />
        <StatisticsLine text="percentage" value={good/all*100} />
    </>
  )   
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  }

  const incrementBad = () => {
    setBad(bad + 1);
  }

  if (good + neutral + bad == 0) {
    return (
      <div>
        <div>
          <h1>Give Feedback</h1>
          <Button handleClick={() => incrementGood()} text="good" />
          <Button handleClick={() => incrementNeutral()} text="neutral" />
          <Button handleClick={() => incrementBad()} text="bad" />
        </div>
        <h1>Statistics</h1> 
        <p>No Feedback Given</p>
      </div>
    )    
  }


  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => incrementGood()} text="good" />
        <Button handleClick={() => incrementNeutral()} text="neutral" />
        <Button handleClick={() => incrementBad()} text="bad" />
      </div>
      {<Statistics good={good} bad={bad} neutral={neutral}/>}
    </div>
  )
}

export default App