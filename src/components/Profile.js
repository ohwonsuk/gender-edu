import React from 'react';

const career = [
  '전 꿈누리복지상담재활협회 한국장애인폭력상담소 소장',
  '전 서울시북부교육지원청 장애학생인권지원단 운영위원',
  '전 한국학교상담복지센터 운영위원',
  '전 한국여성복지상담협회 부설 꿈누리여성장애인상담소',
  '전 한국복지상담교육협회 꿈누리학교폭력대책위원단',
];

const careerList = career.map((item) => <div>{item}</div>);

const Profile = () => {
  return (
    <>
      <div>대표 이 승 은</div>
      <div>{careerList}</div>
    </>
  );
};

export default Profile;
