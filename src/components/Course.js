import React from "react";

const Course = ({ course }) => {
  let tempCourseArr = [...course];

  let courseExercises = tempCourseArr[0].parts.map((item) => item.exercises);
  let initialValue = 0;
  let sumWithInitialValue = courseExercises.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  let courseExercisesIndex2 = tempCourseArr[1].parts.map(
    (item) => item.exercises
  );
  let initialValueIndex2 = 0;
  let sumWithInitialValueIndex2 = courseExercisesIndex2.reduce(
    (accumulatorIndex2, currentValueIndex2) =>
      accumulatorIndex2 + currentValueIndex2,
    initialValueIndex2
  );

  return (
    <div>
      <h1>{tempCourseArr[0].name}</h1>
      {tempCourseArr[0].parts.map((item) => (
        <p key={item.id}>
          {item.name}
          {item.exercises}
        </p>
      ))}
      <strong>Total exercises: {sumWithInitialValue}</strong>

      <p>
        <b>{tempCourseArr[1].name}</b>
      </p>
      {tempCourseArr[1].parts.map((item) => (
        <p key={item.id}>
          {item.name} {item.exercises}
        </p>
      ))}
      <strong>Total exercises: {sumWithInitialValueIndex2}</strong>
    </div>
  );
};

export default Course;
