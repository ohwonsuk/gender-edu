import React from 'react';
import Table from '../components/Table';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

/* <!-- 교육활동가양성 페이지 --> */

const Training = () => {
  return (
    <>
      <Heading />
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
