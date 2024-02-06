import React from 'react';
import MainProfile from '../components/MainProfile';
import WorkItem from '../components/WorkItem';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Board from '../components/Board';
import Heading from '../components/Heading';

/* <!-- 홈페이지 --> */

const Home = () => {
  return (
    <>
      <Heading />
      <div className="w-screen md:pl-[160px] lg:pl-[250px]">
        <Main />
        <MainProfile />
        <WorkItem />
      </div>
      <div className="w-[620px] md:pl-[160px] md:w-auto">
        <Board />
      </div>
      <Footer />
    </>
  );
};

export default Home;
