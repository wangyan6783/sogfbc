import React from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  sidebarData: sidebarData;
}

const LifeGroupsPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} currentTab="小組聚會" />
      <main className="main-content">
        <h1>小組聚會</h1>
        <h3>本教會以「細胞小組教會」的架構發展事工、建立信徒。</h3>
        <h3>
          「細胞小組」是教會生活的基本單位，它不是一個特別活動或附加活動，目的是敬拜和經歷神，彼此服事和對周圍的群體傳福音。
        </h3>
        <h3>「細胞小組」有四項主要的功用以構成其特徵:</h3>
        <h3>1. 彼此建立造就</h3>
        <h3>2. 裝備組員作有效的事奉</h3>
        <h3>3. 向組以外的人傳福音</h3>
        <h3>4. 擴大領導層</h3>
        <h3>
          盼望您今天就加入我們的細胞小組，在其中您可經歷生命的更新與餵養。讓我們一同在基督的身體裡，互相扶持、彼此造就、共同成長！
        </h3>
        <h2>
          <strong>真光小組</strong>
        </h2>
        <h3>聚會時間: 主日下午 1:30</h3>
        <h3>地點: 大堂</h3>
        <h3>組長: 王永姊妹</h3>
        <h2>
          <strong>恩福小組</strong>
        </h2>
        <h3>聚會時間: 週一上午 10:00</h3>
        <h3>地點: 大堂</h3>
        <h3>組長: 何小芳姊妹</h3>
        <h2>
          <strong>恩典青年小組</strong>
        </h2>
        <h3>聚會時間: 週五晚上 7:30</h3>
        <h3>地點: 地下室小教室</h3>
        <h2>
          <strong>家庭小組</strong>
        </h2>
        <h3>聚會時間: 每月第二、四週六晚上 6:30</h3>
        <h3>地點: 地下室大廳</h3>
        <h3 className="text-underline">
          <a href="" target="_blank" rel="noopener noreferrer">
            <strong>查經網站</strong>
          </a>
        </h3>
      </main>
    </>
  );
};

export default LifeGroupsPage;
