import React from 'react';
import HistoryList from './HistoryList';

const historyData = [
  {
    id: 1,
    year: '현재',
    item: [
      '장애학생 인권지원단 더 봄 학생 (2017- )',
      '사제동행프로그램(2022- )',
      '서울특별시강남서초지원청 학생상담(2013-)',
    ],
    agent: [
      '서울특별시교육지원청 특수교육지원센터',
      '서울특별시강남서초교육지원청',
      '서울특별시교육청교육연구정보원',
    ],
  },
  {
    id: 2,
    year: '2021',
    item: [
      '경기북부 장애아동청소년 성 인권교육(2019-)',
      '성 인권교육 강사 양성과정(2016-)',
    ],
    agent: [
      '여성가족부/경기도/양성평등교육진흥원',
      '한국장애인폭력상담소/꿈누리여성장애인상담',
    ],
  },
  {
    id: 3,
    year: '2020',
    item: [
      '도민대상 폭력예방교육(2018-)',
      '청소년사회단체지원-생명존중교육 도담도담',
      '장애학생 인권지원단 현장지원(2018-)',
      '찾아가는 맞춤형 성 인권교육 ',
      '지역사회중심재활사업(2018-)',
      '또래상담교육 전문지도자 양성과정',
      '자살예방교육 전문지도자 양성과정 ',
    ],
    agent: [
      '경기도/남양주시청 여성아동과',
      '남양주시청 교육청소년과(2019-)',
      '구리남양주/의정부교육지원청 특수교육지원센터',
      '서울특별시동작관악교육지원청 특수교육지원센터',
      '장애인 인식개선 및 폭력예방교육-서울 강서보건소',
      '한국청소년상담개발원',
      '한국청소년상담개발원',
    ],
  },
  {
    id: 4,
    year: '2019',
    item: [
      '청년일드림 - 다함께 STAND  UP!',
      '양성평등 - 새롭게 태어나다 리본 Re-born',
      '다산 평생학습축제 시민대상 성 인지 실태조사',
      '경기 북동부권역 유관기관네트워크 강화사업',
      '장애학생  인권지원단 성 인권 교육',
    ],
    agent: [
      '남양주시청',
      '남양주시청 여성아동과',
      '남양주시청 여성아동과',
      '보라데이 연대 캠페인-여성긴급전화1366',
      '경기도고양교육지원청',
    ],
  },
  {
    id: 5,
    year: '2018',
    item: [
      '시민대상 세계여성폭력추방 캠페인',
      '특수학교대상 인권보호 및 실태 전수조사',
      '장애학생 인권지원단 - 찾아가는 성 인권 교육',
      '장애학생 인권지원단 - 자기역량강화',
      '특수교육대상학생 여름방학 캠프(2017-)',
    ],
    agent: [
      '남양주시청 여성아동과/남양주경찰서',
      '서울특별시교육지원청',
      '서울시북부교육지원청 특수교육지원센터',
      '서울시남부교육지원청 특수교육지원센터',
      '서울시중부교육지원청 특수교육지원센터',
    ],
  },
  {
    id: 6,
    year: '2017',
    item: [
      '양성평등 및 여성사회참여확대',
      '피해자 치료회복프로그램',
      '민관합동 세계여성폭력추방캠페인',
      '중랑 장미축제 지역 브랜드',
      '여성장애인 폭력추방주간 캠페인',
      '장애학생 인권지원단 - 맞춤형 성 인권 교육',
      '또래인권지킴이교실',
      '장애학생 인권지원단 인권교육 - 성 인권 교실',
    ],
    agent: [
      '언더스탠드Under Stand  여성가족부/서울시',
      '투아이즈원Two Eeys One  여성가족부',
      '중랑구청/중랑경찰서',
      '성 인지감수성 및 장애인성폭력추방캠페인- 중랑구청',
      '전국성폭력상담소협의회 장애인상담소권역',
      '서울시북부교육지원청 특수교육지원센터',
      '서울시남부교육지원청 특수교육지원센터',
      '서울시중부교육지원청 특수교육지원센터',
    ],
  },
  {
    id: 7,
    year: '2013 ~ 2016',
    item: [
      '장애인성폭력피해자 치료회복프로그램',
      '찾아가는 일일법률체험학교',
      '장애학생 인권지원단 성 인권교육',
      '아동청소년 폭력예방교육',
    ],
    agent: [
      '여성가족부/한국여성복지상담협회',
      '법무부범죄예방위원회 남양주협의회',
      '서울시성북강북/중부교육지원청 특수교육지원센터, 서울시북부/남부교육지원청 특수교육지원센터',
      '경기도구리남양주교육지원청',
    ],
  },
];

const History = () => {
  return (
    <>
      {historyData.map(({ id, year, item, agent }) => {
        let work = [];
        for (let i = 0; i < item.length; i++) {
          work.push({ item: item[i], agent: agent[i] });
        }
        return (
          <>
            <div className="pl-2 text-lg underline mt-5 mb-2">{year}</div>
            <ul className="list-disc leading-relaxed list-outside pl-2">
              {work.map((w, i) => {
                return (
                  <div key={i}>
                    <HistoryList item={w.item} agent={w.agent} />
                  </div>
                );
              })}
            </ul>
            <br />
          </>
        );
      })}
    </>
  );
};

export default History;
