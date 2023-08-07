import React from 'react';
import CardHor from './CardHor';

const workList = [
  {
    id: 1,
    title: '교육프로그램 소개',
    item: [
      '인권교육',
      '폭력예방교육',
      '양성평등교육',
      '생명존중교육',
      '가해자 재발방지교육',
    ],
  },
  {
    id: 2,
    title: '치유프로그램 소개',
    item: ['언어치료', '인지치료', '놀이치료', '미술치료', '피해자심리상담'],
  },
  {
    id: 3,
    title: '교육활동가 양성',
    item: [],
  },
  {
    id: 4,
    title: '교육 및 상담신청',
    item: [],
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
        />
      ))}
    </>
  );
};

export default WorkItem;
