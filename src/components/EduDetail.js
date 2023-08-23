import React from 'react';
import { useParams } from 'react-router';
import { programList } from '../pages/EduProgram';
import { Link } from 'react-router-dom';

const EduDetail = () => {
  const { id } = useParams();
  const num = parseInt(id);
  const { title, text, tags, imgUrl, target, period } = programList[num - 1];
  return (
    <>
      <div className="w-700px md:pl-[160px] lg:pl-[250px] font-ibmsans">
        <div className="pl-2 text-left font-bold text-xl mt-5 mb-5">
          {title}
        </div>
        <img className="w-auto pl-2" src={imgUrl} alt={title} />
        <div className="font-ibmsans pl-2 text-left font-bold text-lg mt-5 mb-5">
          📌 교육내용
        </div>
        <div className="w-[580px] pl-2 text-left font-semibold text-gray-700 mb-5">
          {text}
        </div>
        <div className="pl-2 text-left font-bold text-lg mt-5 mb-5">
          📌 방 식
        </div>
        {tags.map((tag, i) => {
          return (
            <>
              <span
                key={i}
                className="inline-bloc px-3 py-1 font-semibold text-gray-700 mb-2"
              >
                {tag}
              </span>
            </>
          );
        })}
        <div className="pl-2 text-left font-bold text-lg mt-5 mb-5">
          📌 대상자
        </div>
        {target.map((item) => (
          <div className="pl-2 text-left font-semibold text-gray-700 mb-2">
            {item}
          </div>
        ))}
        <div className="pl-2 text-left font-bold text-lg mt-5 mb-5">
          📌 교육기간
        </div>
        <div className="pl-2 text-left font-semibold text-gray-700 mb-5">
          {period}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 mb-5 py-2 px-4 rounded mt-4">
          <Link to="/eduprogram">이 전</Link>
        </button>
      </div>
    </>
  );
};

export default EduDetail;
