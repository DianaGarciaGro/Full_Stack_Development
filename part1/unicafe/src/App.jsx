import { useState, useEffect } from 'react'

const Button = ({handleClick, text}) => 
  <button onClick={handleClick}> {text} </button>

const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return <div> No Feedback given</div>;
  }

  const StatisticLine = ({text, value}) => (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )

  return (
    <table>
        <tbody>
          <StatisticLine text='Good: ' value={good} />
          <StatisticLine text='Neutral: ' value={neutral} />
          <StatisticLine text='Bad: ' value={bad} />
          <StatisticLine text='All: ' value={total} />
          <StatisticLine text='Average: ' value={(good-bad) / total} />
          <StatisticLine text='Positive: ' value={(good / total) *100} />
        </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div> 
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='Good'/>
      <Button handleClick={handleNeutralClick} text='Neutral'/>
      <Button handleClick={handleBadClick} text='Bad'/>

      <h1>Statistics</h1>
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}/>
    </div>
  )
}

export default App