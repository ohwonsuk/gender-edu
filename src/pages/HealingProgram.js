import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';

const HealingProgram = () => {
  return (
    <>
      <div class="font-bold text-xl mb-2">치유프로그램</div>
      <Card
        title="언어치료"
        text="발달장애(경계선, 자폐, 학습장애)아동 청소년 대상으로 개인의 언어발달 정도를 파악하고 연령에 맞도록 지속적인 발달이 이루어지도록 한다."
        imgUrl="https://picsum.photos/200/100?random=1"
        tag1="그룹"
        tag2="개인"
      />
      <Card
        title="인지치료"
        text="발달장애(경계선, 자폐, 학습장애)아동 청소년 대상으로 개인의 발달 정도를 파악하고 연령에 맞도록 지속적인 발달이 이루어지도록 한다."
        imgUrl="https://picsum.photos/200/100?random=2"
        tag1="그룹"
        tag2="개인"
      />
      <Card
        title="놀이치료"
        text="비언어적 의사소통이 자유로운 아동 청소년 대상으로 행동표현을 통한 접근으로 감정표현과 사회적 의사소통이 원활하도록 한다."
        imgUrl="https://picsum.photos/200/100?random=3"
        tag1="그룹"
        tag2="개인"
      />
      <Card
        title="미술치료"
        text="미술활동을 통하여 부정적 감정을 해소하고 정서의 안정화로 자존감 또는 문제해결력을 향상시켜 사회적응력을 발전시킨다."
        imgUrl="https://picsum.photos/200/100?random=4"
        tag1="그룹"
        tag2="개인"
      />
      <Card
        title="피해자 심리상담"
        text="피해자의 심리회복과 함께 적절한 대처능력의 인지로 자기관리능력을 향상시키며 긍정적 사회적 관계 회복을 지원한다."
        imgUrl="https://picsum.photos/200/100?random=5"
        tag1="집합"
        tag2="개인"
      />
      <Footer />
    </>
  );
};

export default HealingProgram;
