import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';

const EduProgram = () => {
  return (
    <>
      <div class="font-bold text-xl mb-2">교육프로그램</div>
      <Card
        title="인권교육"
        text="또래인권교육, 성인권교육, 장애인 인권교육 외"
        imgUrl="https://picsum.photos/200/100?random=1"
        tag1="집합"
        tag2="개인"
      />
      <Card
        title="폭력예방교육"
        text="학교폭력, 가정폭력, (디지털)성폭력 외"
        imgUrl="https://picsum.photos/200/100?random=2"
        tag1="집합"
        tag2="개인"
      />
      <Card
        title="양성평등교육"
        text="성 인지적 관점을 기반으로 사회적 성역할의 고정관념 또는 편견에서 벗어나 평등함을 인지"
        imgUrl="https://picsum.photos/200/100?random=3"
        tag1="대면"
      />
      <Card
        title="생명존중교육"
        text="생명의 소중함을 인지하고 자아존중감 및 타인에 대한 배려를 도모하여 삶의 긍정적 인식을 제고하도록 한다."
        imgUrl="https://picsum.photos/200/100?random=4"
        tag1="대면"
      />
      <Card
        title="가해자 재발방지교육"
        text="학교폭력,가정폭력,(디지털)성폭력, 성희롱 가해자의 왜곡된 인식을 수정하고 재발을 방지한다."
        imgUrl="https://picsum.photos/200/100?random=5"
        tag1="집합"
        tag2="개인"
      />
      <Footer />
    </>
  );
};

export default EduProgram;
