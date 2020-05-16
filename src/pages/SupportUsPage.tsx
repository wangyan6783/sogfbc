import React from 'react';
import Sidebar from '../components/Sidebar';

interface Props {
  sidebarData: sidebarData;
}

const SupportUsPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <div className='page'>
      <Sidebar sidebarData={sidebarData} />
      <main className='page-content'>
        <h1>支持我們</h1>
        <h3>目前本教會採用支票奉獻的方式</h3>
        <h3>
          <strong>支票的Title 請寫:</strong>
        </h3>
        <h3>Shower of Grace Faith Bible Church 或 SOGFBC</h3>
        <h3>
          <strong>地址請寄到:</strong>
        </h3>
        <h3>Shower of Grace Faith Bible Church</h3>
        <h3>163-16 Pidgeon Meadow Rd.</h3>
        <h3>Flushing, NY 11358</h3>
      </main>
    </div>
  );
};

export default SupportUsPage;
