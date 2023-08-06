import React from 'react';
import Header from '../components/Header';
import MainProfile from '../components/MainProfile';
import WorkItem from '../components/WorkItem';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <MainProfile />
      <WorkItem />
      <Footer />
    </>
  );
};

export default Home;
