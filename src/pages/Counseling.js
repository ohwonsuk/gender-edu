import React from 'react';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

/* <!-- 교육 및 상담신청 페이지 --> */

const Counseling = () => {
  return (
    <>
      <Heading />
      <div className="w-700px md:pl-[160px] lg:pl-[250px]">
        <div className="font-ibmsans pl-2 mt-5 font-bold text-xl mb-2">
          교육 및 상담신청
        </div>
        <div>
          <iframe
            title="google-survey"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeGdiNXk4GnlhZMZzx03JlhFpp4HN5cHf9r34IDTNzTdMOpmw/viewform?embedded=true"
            width="640"
            height="2124"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            로드 중…
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Counseling;
