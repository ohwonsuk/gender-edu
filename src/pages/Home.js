import React from 'react';
import MainProfile from '../components/MainProfile';
import WorkItem from '../components/WorkItem';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Board from '../components/Board';

const Home = () => {
  return (
    <>
      <Main />
      <MainProfile />
      <WorkItem />
      <Board />
      <Footer />
    </>
  );
};

export default Home;
