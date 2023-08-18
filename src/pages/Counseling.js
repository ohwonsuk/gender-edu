import React from 'react';
import Footer from '../components/Footer';

const Counseling = () => {
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
      <Footer />
    </>
  );
};

export default Counseling;
