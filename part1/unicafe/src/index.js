import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  } else {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = `${good / all * 100}%`
    return (
      <table>
        <tbody>

          <Statistic text={'good'} value={good} />
          <Statistic text={'neutral'} value={neutral} />
          <Statistic text={'bad'} value={bad} />
          <Statistic text={'all'} value={all} />
          <Statistic text={'average'} value={average} />
          <Statistic text={'positive'} value={positive} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onClick = type => () => {
    switch (type) {
      case 'good':
        setGood(good + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        break
      case 'bad':
        setBad(bad + 1)
        break
      default:
        break
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' onClick={onClick('good')} />
      <Button text='neutral' onClick={onClick('neutral')} />
      <Button text='bad' onClick={onClick('bad')} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)