import React from 'react';

const HistoryList = ({ item, agent }) => {
  return (
    <>
      <ul className="list-disc leading-relaxed list-outside pl-4">
        <li>{item}</li>
      </ul>
      <div className="pl-4 list-outside">{agent}</div>
    </>
  );
};

export default HistoryList;
