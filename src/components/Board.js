import React from 'react';
import BoardList from './BoardList';

const Board = () => {
  return (
    <>
      <div class="pl-2 text-left font-bold text-xl mt-5 mb-5">공지사항</div>
      <div class="relative overflow-x-auto mb-5">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                제 목
              </th>
              <th scope="col" class="px-6 py-3">
                작성자
              </th>
              <th scope="col" class="px-6 py-3">
                날 짜
              </th>
              <th scope="col" class="px-6 py-3">
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
