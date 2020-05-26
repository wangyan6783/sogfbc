import React from 'react';
import MainModule from '../components/homepage/MainModule';

const HomePage: React.FC = () => {
  return (
    <main className='homepage'>
      <img
        className='homepage-image'
        src='https://gdurl.com/JQSQ'
        alt='经历神的大能'
      />
      <MainModule />
    </main>
  );
};

export default HomePage;
