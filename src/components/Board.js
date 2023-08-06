import React from 'react';
import BoardList from './BoardList';

const Board = () => {
  return (
    <>
      <div>공지사항</div>
      <BoardList
        title="홈페이지 오픈안내"
        editor="관리자"
        date="5월8일"
        status="진행중"
      />
      <BoardList
        title="교육 및 상담신청 안내"
        editor="관리자"
        date="5월8일"
        status="진행중"
      />
    </>
  );
};

export default Board;
