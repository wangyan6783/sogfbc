import React from 'react';
import Sidebar from '../components/Sidebar';

interface Props {
  sidebarData: sidebarData;
}

const DiscipleTrainingPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <div className='page'>
      <Sidebar sidebarData={sidebarData} currentTab='門徒訓練' />
      <main className='page-content'>
        <h1>門徒訓練</h1>
        <h3>
          主耶穌說：你們要去使萬民作我的門徒！很清楚，每一個相信耶穌的人，都是祂的門徒。因此身為門徒，就應該知道怎樣來跟隨主。「門徒訓練」的設立，就是為了造就眾信徒，通過有系統的學習、探討，對真道有完整的認識。並藉著每週的讀經跟進，每天的靈修、禱告，與神建立美好的關係。讓立志成為忠心門徒的人，有充足的裝備，扎實的基礎，活潑的靈命，更好的服事神，成為可以教導、造就別人的人。
        </h3>
        <h3>上課時間: 週五晚上 7:30</h3>
        <h3>老師: 戴新牧師</h3>
        <h3 className='text-underline'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <strong>課堂講義</strong>
          </a>
        </h3>
      </main>
    </div>
  );
};

export default DiscipleTrainingPage;
