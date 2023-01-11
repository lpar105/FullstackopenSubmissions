export const Course = ({course}) => {
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
  
  