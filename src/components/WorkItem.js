import React from 'react';

const workList = [
  {
    id: 1,
    title: '교육프로그램 소개',
    list: [
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
    list: ['언어치료', '인지치료', '놀이치료', '미술치료', '피해자심리상담'],
  },
  {
    id: 3,
    title: '교육활동가 양성',
    list: [],
  },
  {
    id: 4,
    title: '교육 및 상담신청',
    list: [],
  },
];

const WorkItem = () => {
  const lists = workList.map(({ id, title, list }) => {
    return (
      <>
        <li key={id}>{title}</li>
        <div>
          {list.map((list) => (
            <li>{list}</li>
          ))}
        </div>
      </>
    );
  });

  return (
    <>
      <div>{lists}</div>
    </>
  );
};

export default WorkItem;
