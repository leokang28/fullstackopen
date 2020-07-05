import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))
  const [most, setMost] = useState(-1)

  const random = () => {
    setSelected(Math.floor(Math.random() * 10 % props.anecdotes.length))
  }

  const vote = () => {
    const newVotes = Array.from(votes)
    newVotes[selected] += 1
    setVotes(newVotes)
    if (most === -1) {
      setMost(selected)
    } else {
      if (newVotes[selected] === newVotes[most]) {
        setMost(Math.min(selected, most))
      } else if (newVotes[selected] > newVotes[most]) {
        setMost(selected)
      }
    }
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdotes[selected]}
      </div>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={random}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[most]}</p>
      {most > -1 && <p>has {votes[most]} votes</p>}
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)