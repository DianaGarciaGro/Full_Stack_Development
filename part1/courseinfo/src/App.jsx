const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({course}) => {
    return (
      <div>
        <h1> {course} </h1>
      </div>
    )
  }

  const Content = ({parts}) => {
    const names = parts.map((part, index) => (
      <p key={index}>{part.name}</p>
    ));

    return (
      <div>
        {names}
      </div>
    )
  }

  const Total = ({parts}) => {
    const result = parts.reduce((acc, curr) => acc + curr.exercises, 0);
    console.log(parts[0].exercises)
    console.log(parts[1].exercises)
    console.log(parts[2].exercises)
    console.log("Total: " + result)

    return (
      <p>Number of exercises: {result}</p>
    )
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App

/**
 *      <Part part={courseParts[0].part} exercise={courseParts[0].exercise}/>
        <Part part={courseParts[1].part} exercise={courseParts[1].exercise}/>
        <Part part={courseParts[2].part} exercise={courseParts[2].exercise}/>

        {courseParts[0].exercise + courseParts[1].exercise + courseParts[2].exercise}
 */