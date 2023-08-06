import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div>젠더에듀상담센터</div>
      <Link to="/about">센터소개</Link>
      <Link to="/eduprogram">교육프로그램</Link>
      <Link to="/healingprogram">치유프로그램</Link>
      <Link to="/training">교육활동가 양성</Link>
      <Link to="/counseling">교육 및 상담신청</Link>
    </>
  );
};

export default Header;
