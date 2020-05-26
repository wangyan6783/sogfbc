import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Modal from '../components/Modal';

interface Props {
  sidebarData: sidebarData;
}

const HoursPage: React.FC<Props> = ({ sidebarData }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => setModalOpen(true);

  return (
    <>
      <div className='page'>
        <Sidebar sidebarData={sidebarData} currentTab='聚會時間' />
        <main className='page-content'>
          <h1>聚會時間</h1>
          <h2>國語崇拜</h2>
          <h3>主日上午 9:30</h3>
          <h3>主日上午 11:00</h3>
          <h2>青少年英語崇拜</h2>
          <h3>主日上午 11:00</h3>
          <h2>兒童主日學</h2>
          <h3>主日上午 9:30</h3>
          <h3>主日上午 11:00</h3>
          <h2>公車 Bus: Q65, Q27</h2>
          <img
            className='location-image'
            src='https://gdurl.com/RE_S'
            alt='church location'
            onClick={handleModal}
          />
        </main>
      </div>
      {modalOpen && (
        <Modal
          imageUrl='https://gdurl.com/RE_S'
          imageAlt='教會地址地圖'
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default HoursPage;
