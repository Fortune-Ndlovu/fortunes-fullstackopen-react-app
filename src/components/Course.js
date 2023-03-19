import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((item) => (
          <p key={item.id}>{item.name} {item.exercises}</p>
      ))}
    </div>
  );
};

export default Course;
