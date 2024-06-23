import React from 'react';

/* <!-- 홈페이지 대표 이력정보 --> */

const MainProfile = () => {
  return (
    <>
      <div className="font-ibmsans pl-2 text-lg mb-2">대표 이 승 은</div>
      <ul className="font-ibmsans pl-6 list-disc leading-relaxed mb-5">
        <li>서울특별시교육감 표창 2024</li>
        <li>여성가족부 우수교육사례 장관상 수상 2019</li>
        {/* <li>경기북부 학교 및 장애아동청소년 성 인권교육</li> */}
        <li>전 한국장애인폭력상담소 소장</li>
        <li>전 서울특별시북부교육지원청 인권지원단 운영위원</li>
        <li>전 한국학교상담복지센터 운영위원</li>
      </ul>
    </>
  );
};

export default MainProfile;
