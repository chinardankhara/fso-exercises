const Header = (props) => {
    return (
      <>
        <h1>{props.name}</h1>
      </>
    )
  }
  
  const Part = (props) => {
    return (
      <>
        <p>{props.name} {props.exercises}</p>
      </>
    )
  }
  
  
  const Course = ({ course }) => {
    const Content = ({ parts }) => {
      return (
        <>
          {parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises}/>
          )}
        </>
      );
    };
  
    const Total = ({ parts }) => {
      const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
      return (
        <>
          <b>Total of {totalExercises} exercises</b>
        </>
      );
    };
  
    return (
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    );
  };

  export default Course