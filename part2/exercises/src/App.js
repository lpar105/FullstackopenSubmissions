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
    <h2>{course}</h2>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => {
        return <Course course={course} key={course.id}/>
      })}
    </div>
  )
}

export default App