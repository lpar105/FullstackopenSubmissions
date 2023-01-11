const Course = ({course}) => {
  const {name, parts} = course;
  return(
    <div>
      <Header course={name} />
      <Content parts={parts} />
    </div>
  )
}

const Header = ({course}) => {
  return(
    <h1>{course}</h1>
  )
}

const Part = ({part}) => {
  return(
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const getTotalExercises = (parts) => {
  return parts.reduce((sum, x) => x.exercises + sum, 0)
}

const Content = ({parts}) => {
  const total = getTotalExercises(parts);
  return(
    <>
      {parts.map(x => <Part part={x} key={x.id}/>)}
      <b> Total of {total} exercises </b>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App