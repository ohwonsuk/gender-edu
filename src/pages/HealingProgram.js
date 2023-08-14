import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Footer from '../components/Footer';

export const healingList = [
  {
    id: 1,
    title: '언어치료',
    text: '발달장애(경계선, 자폐, 학습장애)아동 청소년 대상으로 개인의 언어발달 정도를 파악하고 연령에 맞도록 지속적인 발달이 이루어지도록 한다.',
    imgUrl: 'https://picsum.photos/200/100?random=1',
    tags: ['그룹', '개인'],
    target: [
      '청소년대상 : 초, 중, 고 특수학급,  특수학교, 사회복지시설 이용자 등',
      '성   인대상 : 장애인 직업재활시설, 장애인복지시설 이용자 등 ',
    ],
    period: '협의후 결정',
  },
  {
    id: 2,
    title: '인지치료',
    text: '발달장애(경계선, 자폐, 학습장애)아동 청소년 대상으로 개인의 발달 정도를 파악하고 연령에 맞도록 지속적인 발달이 이루어지도록 한다.',
    imgUrl: 'https://picsum.photos/200/100?random=2',
    tags: ['그룹', '개인'],
    target: [
      '청소년대상 : 초, 중, 고 특수학급,  특수학교, 사회복지시설 이용자 등',
      '성   인대상 : 장애인 직업재활시설, 장애인복지시설 이용자 등 ',
    ],
    period: '협의후 결정',
  },
  {
    id: 3,
    title: '놀이치료',
    text: '비언어적 의사소통이 자유로운 아동 청소년 대상으로 행동표현을 통한 접근으로 감정표현과 사회적 의사소통이 원활하도록 한다.',
    imgUrl: 'https://picsum.photos/200/100?random=3',
    tags: ['그룹', '개인'],
    target: [
      '청소년대상 : 초, 중, 고 (특수)학급,  특수학교, 사회복지시설 등',
      '성   인대상 : 장애인 직업재활시설, 장애인복지시설 이용자 등 ',
    ],
    period: '협의후 결정',
  },
  {
    id: 4,
    title: '미술치료',
    text: '미술활동을 통하여 부정적 감정을 해소하고 정서의 안정화로 자존감 또는 문제해결력을 향상시켜 사회적응력을 발전시킨다.',
    imgUrl: 'https://picsum.photos/200/100?random=4',
    tags: ['그룹', '개인'],
    target: [
      '청소년대상 : 초, 중, 고 (특수)학급,  특수학교, 사회복지시설 등',
      '성   인대상 : 장애인 직업재활시설, 장애인복지시설 이용자 등 ',
    ],
    period: '협의후 결정',
  },
  {
    id: 5,
    title: '피해자 심리상담',
    text: '피해자의 심리회복과 함께 적절한 대처능력의 인지로 자기관리능력을 향상시키며 긍정적 사회적 관계 회복을 지원한다.',
    imgUrl: 'https://picsum.photos/200/100?random=5',
    tags: ['집합', '개인'],
    target: [
      '청소년대상 : 초, 중, 고 (특수)학급,  특수학교 등',
      '성   인대상 : 장애인 직업재활시설, 장애인복지시설 이용자, 부모 , 교직원 등 ',
    ],
    period: '협의후 결정',
  },
];

const HealingProgram = () => {
  return (
    <>
      <div className="w-full h-40 mx-auto bg-gradient-to-b from-cyan-600 border-0 rounded" />
      <div className="pl-2 mt-5 font-bold text-xl mb-2">치유프로그램</div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {healingList.map((list, i) => {
          return (
            <div key={i}>
              <Link to={`/healingprogram/${list.id}`}>
                <Card
                  title={list.title}
                  text={list.text}
                  imgUrl={list.imgUrl}
                  tags={list.tags}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default HealingProgram;
