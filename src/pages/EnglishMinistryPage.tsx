import React from 'react';
import Sidebar from '../components/Sidebar';

interface Props {
  sidebarData: sidebarData;
}
const EnglishMinistryPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <div className='page'>
      <Sidebar sidebarData={sidebarData} currentTab='英文事工' />
      <main className='page-content'>
        <h1>英文事工 English Ministry</h1>
        <h1>青少年事工 Youth Ministry</h1>
        <h2>A. Sunday School</h2>
        <h3>Time: Sunday Morning at 9:30</h3>
        <h3>Lesson (March-May): Proverbs</h3>
        <h2>B. Sunday Service</h2>
        <h3>Time: Sunday Morning at 11:00</h3>
        <h3 className='text-underline'>Announcement</h3>
        <h3>ZOOM meeting @2pm on Sundays</h3>
        <h3>(ID and Password required)</h3>
        <h3 className='text-underline'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <strong>Serving Chart</strong>
          </a>
        </h3>
      </main>
    </div>
  );
};

export default EnglishMinistryPage;
