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
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {all} </p>
        <p>average {(good-bad)/all} </p>
        <p>positive {good/all*100} %</p> 
    </>
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