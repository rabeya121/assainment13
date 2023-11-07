import React from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import MainContent from '../components/Home/MainContent';
import Sidebar from '../components/Home/Sidebar';

const Home = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Home;