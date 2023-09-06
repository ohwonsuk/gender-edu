import React from 'react';

const HistoryList = ({ item, agent }) => {
  return (
    <>
      <ul className="font-ibmsans list-disc leading-relaxed list-outside pl-4">
        <li>{item}</li>
      </ul>
      {/* 줄을 나눠서 표현하는 방법 */}
      <div className="pl-4 list-outside whitespace-pre-line">
        {agent.replace(',', '\n')}
      </div>
    </>
  );
};

export default HistoryList;
