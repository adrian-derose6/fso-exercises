const Header = ({ course }) => {
  return (
    <h2>{course}</h2>
  );
};

const Part = ({ name, number }) => {
  return (
    <p>
      {name} {number}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <Part name={part.name} number={part.exercises} key={part.id}/>
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0)

  return (
    <b>total of {total} exercises</b>
  );
};

const Course = ({ course }) => { 
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;