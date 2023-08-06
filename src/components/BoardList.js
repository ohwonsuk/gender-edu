import React from 'react';

const BoardList = ({ title, editor, date, status }) => {
  return (
    <>
      <div>
        {title}
        <span>{editor}</span>
        <span>{date}</span>
        <span>{status}</span>
      </div>
    </>
  );
};

export default BoardList;
