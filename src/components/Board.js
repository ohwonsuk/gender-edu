import React from 'react';
import BoardList from './BoardList';

const boardData = [
  {
    id: 1,
    title: '홈페이지 오픈안내',
    editor: '관리자',
    date: '5월8일',
    status: '진행중',
    content: [
      '안녕하세요 ~',
      '젠더에듀상담센터 홈페이지를 오픈하였습니다.',
      '다양한 교육프로그램을 운영하고 있으니 많은 관심 부탁드립니다.',
      ' ',
      '감사합니다.',
    ],
  },
  {
    id: 2,
    title: '교육 및 상담신청 안내',
    editor: '관리자',
    date: '5월8일',
    status: '진행중',
    content: ['홈페이지 신청서 제출 또는 유선으로 연락주시기 ', '바랍니다.'],
  },
];

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
              <th
                scope="col"
                className="px-6 py-3 font-medium flex justify-center"
              >
                보 기
              </th>
            </tr>
          </thead>
          <tbody>
            {boardData.map((b) => (
              <BoardList
                kye={b.id}
                title={b.title}
                editor={b.editor}
                date={b.date}
                status={b.status}
                content={b.content}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Board;
