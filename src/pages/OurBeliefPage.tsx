import React from 'react';

import Sidebar from '../components/Sidebar';
import ourBliefData from '../data/our-belief.data.json';

interface Props {
  sidebarData: sidebarData;
}

const OurBeliefPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <div className='page'>
      <Sidebar sidebarData={sidebarData} currentTab='我們的信仰' />
      <main className='page-content'>
        <h1>我們的信仰</h1>
        <ul>
          {ourBliefData.data.map((item) => {
            return (
              <li key={item}>
                <h3>{item}</h3>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default OurBeliefPage;
