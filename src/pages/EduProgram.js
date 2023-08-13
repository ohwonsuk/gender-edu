import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Footer from '../components/Footer';

export const programList = [
  {
    id: 1,
    title: '인권교육',
    text: '또래인권교육, 성인권교육, 장애인 인권교육 외',
    imgUrl: 'https://picsum.photos/200/100?random=1',
    tags: ['집합', '개인'],
    target: [
      '청소년대상 : 초, 중, 고 (특수)학급,  특수학교 등',
      '성  인대상 : 장애인 직업재활시설, 장애인복지시설 이용자, 부모 , 교직원 등 ',
    ],
    period: '협의후 결정',
  },
  {
    id: 2,
    title: '폭력예방교육',
    text: '학교폭력, 가정폭력, (디지털)성폭력 외',
    imgUrl: 'https://picsum.photos/200/100?random=2',
    tags: ['집합', '개인'],
    target: [
      '청소년대상 : 초, 중, 고 (특수)학급,  특수학교 등',
      '성   인대상 : 장애인 직업재활시설, 장애인복지시설 이용자, 부모 , 교직원 등 ',
    ],
    period: '협의후 결정',
  },
  {
    id: 3,
    title: '양성평등교육',
    text: '성 인지적 관점을 기반으로 사회적 성역할의 고정관념 또는 편견에서 벗어나 평등함을 인지',
    imgUrl: 'https://picsum.photos/200/100?random=3',
    tags: ['대면'],
    target: [
      '청소년대상 : 초, 중, 고 (특수)학급,  특수학교 등',
      '성   인대상 : 장애인 직업재활시설, 장애인복지시설 이용자, 부모 , 교직원 등 청소년 ',
    ],
    period: '협의후 결정',
  },
  {
    id: 4,
    title: '생명존중교육',
    text: '생명의 소중함을 인지하고 자아존중감 및 타인에 대한 배려를 도모하여 삶의 긍정적 인식을 제고하도록 한다.',
    imgUrl: 'https://picsum.photos/200/100?random=4',
    tags: ['대면'],
    target: [
      '청소년대상 : 초, 중, 고 (특수)학급,  특수학교 등',
      '성   인대상 : 장애인 직업재활시설, 장애인복지시설 이용자, 부모 , 교직원 등 ',
    ],
    period: '협의후 결정',
  },
  {
    id: 5,
    title: '가해자 재발방지교육',
    text: '학교폭력,가정폭력,(디지털)성폭력, 성희롱 가해자의 왜곡된 인식을 수정하고 재발을 방지한다.',
    imgUrl: 'https://picsum.photos/200/100?random=5',
    tags: ['집합', '개인'],
    target: [
      '청소년대상 : 초, 중, 고 (특수)학급,  특수학교 등',
      '성   인대상 : 장애인 직업재활시설, 장애인복지시설 이용자 등 ',
    ],
    period: '협의후 결정',
  },
];

const EduProgram = () => {
  return (
    <>
      <div className="w-full h-40 mx-auto bg-gradient-to-b from-cyan-600 border-0 rounded" />
      <div className="pl-2 mt-5 font-bold text-xl mb-2">교육프로그램</div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {programList.map((list) => {
          return (
            <>
              <Link to={`/eduprogram/${list.id}`}>
                <Card
                  title={list.title}
                  text={list.text}
                  imgUrl={list.imgUrl}
                  tags={list.tags}
                />
              </Link>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default EduProgram;
