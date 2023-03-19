import React from "react";

const Course = ({ course }) => {
  let courseExercises = course.parts.map((item) => item.exercises);
  let initialValue = 0;
  let sumWithInitialValue = courseExercises.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((item) => (
        <p key={item.id}>
          {item.name}
          {item.exercises}
        </p>
      ))}
      <b>Total exercises: {sumWithInitialValue}</b>
    </div>
  );
};

export default Course;
