import React from 'react';
import BoardList from './BoardList';

const Board = () => {
  return (
    <>
      <div className="pl-2 text-left font-bold text-xl mt-5 mb-5">공지사항</div>
      <div className="pl-2 relative overflow-x-auto mb-5">
        <table className="w-auto text-base text-left text-gray-500 dark:text-gray-400">
          <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-12 py-3 font-medium flex justify-center"
              >
                제 목
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                작성자
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                날 짜
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                상 태
              </th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Board;
