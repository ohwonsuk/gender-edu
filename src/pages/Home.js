import React from 'react';
import MainProfile from '../components/MainProfile';
import WorkItem from '../components/WorkItem';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Board from '../components/Board';

const Home = () => {
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
      <Main />
      <MainProfile />
      <WorkItem />
      <Board />
      <Footer />
    </>
  );
};

export default Home;
