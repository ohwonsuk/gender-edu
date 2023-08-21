import React from 'react';
import Intro from '../components/Intro';
import Profile from '../components/Profile';
import History from '../components/History';
import Footer from '../components/Footer';

const target = [
  '부정적 감정 또는 왜곡된 가치관의 전환으로 사회적 차별 및 폭력을 예방한다.',
  '성 인지적 관점(gender-sensitive perspective)의 검토와 양성평등 이해관계를 구축한다.',
  '장애 및 비장애인의 개별적 특성을 고려하여 사회문화에 맞는 자아인식을 형성한다.',
  '맞춤형 교육 및 치유프로그램을 통한 감수성 향상으로 건강한 사회구성원으로 융화를 도모한다.',
  '교육컨텐츠 연구 활성화로 건강한 디지털 문화조성 및 안전한 지역사회 환경을 조성한다.',
];

const targetList = target.map((list, i) => <li key={i}>{list}</li>);

const About = () => {
  return (
    <>
      <div className="w-full h-40 mx-auto bg-gradient-to-b from-teal-400 to-teal-50 border-0 rounded">
        <div className="font-ibmsans text-xs text-sky-500 pt-28 pl-10 font-semibold">
          Gender Edu
        </div>
        <div className="font-ibmsans text-xs text-sky-500 pl-10 font-semibold">
          Counseling Center
        </div>
      </div>
      {/* my-4 md:my-10 상단 메뉴 마진 제거*/}
      <div className="w-700px md:pl-[150px] lg:pl-[250px]">
        <div className="font-ibmsans pl-2 mt-5 font-bold text-xl mb-2">
          전더에듀상담센터는
        </div>
        <Intro />
        <ul className="pl-6 list-disc leading-relaxed mb-5">{targetList}</ul>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <Profile />
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <History />
      </div>
      <Footer />
    </>
  );
};

export default About;
