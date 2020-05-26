import React from 'react';
import Sidebar from '../components/Sidebar';

interface Props {
  sidebarData: sidebarData;
}
const ChildrenMinistryPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <div className='page'>
      <Sidebar sidebarData={sidebarData} currentTab='兒童事工' />
      <main className='page-content'>
        <h1>兒童事工 Children Ministry</h1>
        <h3>年齡: 4歲幼兒-小學5年級</h3>
        <h2>A. 兒童主日學</h2>
        <h3>上課時間</h3>
        <h3>
          <strong>1. 主日上午 9:30</strong>
        </h3>
        <h3>
          上課內容 (3-5月): Sowing and Growing, The Trust Test, You’ve Got the
          Power, Easter Joy! Prayer Power, God Guides, Fruit of the Spirit
        </h3>
        <h3>
          <strong>2. 主日上午 11:00</strong>
        </h3>
        <h3>上課內容 (3-5月): The Lord’s Prayer 主禱文</h3>
        <h2>B. 敬拜團</h2>
        <h3>使命: 訓練將來教會領袖，帶領兒童主日學詩歌敬拜</h3>
        <h3>成員: 需由教牧同工推薦，並填寫申請表</h3>
        <h3>練習時間:</h3>
        <h3>主日中午 1:00-2:00</h3>
        <h3 className='text-underline'>消息</h3>
        <h3>
          為配合紐約政府抗疫規定，兒童主日學暫停上課，每週的功課會寄發給家長
        </h3>
        <h3 className='text-underline'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <strong>服事表</strong>
          </a>
        </h3>
        <h3 className='text-underline'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <strong>敬拜詩歌</strong>
          </a>
        </h3>
        <h3 className='text-underline'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <strong>Newspaper</strong>
          </a>
        </h3>
      </main>
    </div>
  );
};

export default ChildrenMinistryPage;
