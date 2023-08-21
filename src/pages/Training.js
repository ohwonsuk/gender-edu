import React from 'react';
import Table from '../components/Table';
import Footer from '../components/Footer';

const Training = () => {
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
      <div className="w-700px md:pl-[160px] lg:pl-[250px]">
        <div className="font-ibmsans pl-2 mt-5 font-bold text-xl mb-2">
          교육활동가 양성
        </div>
        <div className="w-[530px] font-ibmsans pl-2 text-left text-lg mb-5">
          교육프로그램 콘텐츠 연구 및 교육활동의 참여로 프로그램의 질적 향상과
          적극적인 폭력예방 활동으로 안전한 사회기반 조성에 기여하도록 한다.
        </div>
        <Table />
      </div>
      <Footer />
    </>
  );
};

export default Training;
