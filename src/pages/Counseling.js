import React from 'react';
import Footer from '../components/Footer';

const Counseling = () => {
  return (
    <>
      <div class="pl-2 mt-20 font-bold text-xl mb-2">교육 및 상담신청</div>
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeGdiNXk4GnlhZMZzx03JlhFpp4HN5cHf9r34IDTNzTdMOpmw/viewform?embedded=true"
          width="640"
          height="2124"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          로드 중…
        </iframe>
      </div>
      <Footer />
    </>
  );
};

export default Counseling;
