import React from "react";

const Filter = ({ filterValue, handleFilterChange }) => {
  return (
    <div>
      Filter shown with: <input type={filterValue} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
