import React from 'react';
import MainProfile from '../components/MainProfile';
import WorkItem from '../components/WorkItem';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Board from '../components/Board';

const Home = () => {
  return (
    <>
      <div className="w-full h-40 mx-auto bg-gradient-to-b from-cyan-600 border-0 rounded" />
      <Main />
      <MainProfile />
      <WorkItem />
      <Board />
      <Footer />
    </>
  );
};

export default Home;
