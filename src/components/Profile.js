import React from 'react';

const career = [
  '전 꿈누리복지상담재활협회 한국장애인폭력상담소 소장',
  '전 서울시북부교육지원청 장애학생인권지원단 운영위원',
  '전 한국학교상담복지센터 운영위원',
  '전 한국여성복지상담협회 부설 꿈누리여성장애인상담소',
  '전 한국복지상담교육협회 꿈누리학교폭력대책위원단',
];

const careerList = career.map((item, i) => <li key={i}>{item}</li>);

const Profile = () => {
  return (
    <>
      <div className="pl-2 font-bold text-xl mb-2">대표 이 승 은</div>
      <ul className="pl-6 list-disc leading-relaxed text-lg mb-5">
        {careerList}
      </ul>
    </>
  );
};

export default Profile;
