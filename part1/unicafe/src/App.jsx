import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

// const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  const total = good + bad + neutral
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  if (total === 0) {
    return (
      <>
        <h3>Statistics</h3>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h3>Statistics</h3>
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All:</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Percent Positive:</td>
            <td>{positivePercentage} %</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodUpdate = () => {
    setGood(good + 1)
  }
  const handleNeutralUpdate = () => {
    setNeutral(neutral + 1)
  }
  const handleBadUpdate = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h3>Give Feedback</h3>
      <Button text="Good" onClick={handleGoodUpdate}/>
      <Button text="Neutral" onClick={handleNeutralUpdate}/>
      <Button text="Bad" onClick={handleBadUpdate}/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    
    </>
  )
}

export default App