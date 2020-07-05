import React from 'react';
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.content.part} {props.content.exercises}
    </p>
  )
}

const Content = (props) => {
  return props.parts.map(content => <Part content={content} />)
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((prev, cur) => prev + cur.exercises, 0)}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercises: 10
      },
      {
        part: 'Using props to pass data',
        exercises: 7
      },
      {
        part: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)