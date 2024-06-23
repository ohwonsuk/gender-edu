import React from 'react';
import CardHor from './CardHor';

const workList = [
  {
    id: 1,
    title: '👉 교육프로그램 소개',
    item: [
      '인권교육',
      '폭력예방교육',
      '양성평등교육',
      '생명존중교육',
      '가해자 재발방지교육',
    ],
    path: '/eduprogram',
  },
  {
    id: 2,
    title: '👉 재활프로그램 소개',
    item: ['언어치료', '인지치료', '놀이치료', '미술치료', '피해자심리상담'],
    path: '/healingprogram',
  },
  {
    id: 3,
    title: '👉 교육활동가 양성',
    item: [],
    path: '/training',
  },
  {
    id: 4,
    title: '👉 교육 및 상담신청',
    item: [],
    path: '/counseling',
  },
];

const WorkItem = () => {
  return (
    <>
      {workList.map((list) => (
        <CardHor
          key={list.id}
          title={list.title}
          item={list.item}
          id={list.id}
          path={list.path}
        />
      ))}
    </>
  );
};

export default WorkItem;
