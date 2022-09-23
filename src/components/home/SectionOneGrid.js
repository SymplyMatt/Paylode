import React from "react";

const SectionOneGrid = ({ title, desc, num }) => {
  return (
    <div className='item'>
      <div className='blue-bg'>
        <p className='title'>{title}</p>
        <p className='description'>{desc}</p>
        <i class='fa-solid fa-arrow-right'></i>
      </div>
      <h1>{num}</h1>
    </div>
  );
};

export default SectionOneGrid;
