import React from "react";
import Sidebar from "../components/Sidebar";
interface Props {
  sidebarData: sidebarData;
}

const SundaySchoolPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} currentTab="成人主日學" />
      <main className="main-content">
        <h1>成人主日學</h1>
        <h3>2020年 3-5月課程</h3>
        <h2>1. 撒母耳記上下</h2>
        <h3>
          撒母耳記上下記錄以色列最後一位士師撒母耳的生平，以色列第一個君王掃羅的興衰和以色列最偉大的君王大衛的興起。整個朝代甚至國家的興亡，也完全在乎他們是否遵守神的律法。讓我們看到守約施慈愛的神。教導今日的基督徒當如何活並信靠祂，相信神的手要引導你。
        </h3>
        <h3>上課時間: 主日上午 9:30</h3>
        <h3>老師: 何小芳姊妹</h3>
        <h3 className="text-underline">
          <a href="" target="_blank" rel="noopener noreferrer">
            <strong>課堂講義</strong>
          </a>
        </h3>
        <h2>2. 兩約中間時代</h2>
        <h3>
          課程包含的時期是從第二聖殿的完工到其焚毀(516BC-70AD)大約600年左右的猶太人歷史,明白這段時間發生的歷史,可以幫助我們瞭解主耶穌出生時的背景,看到神在歷史中的主導。
        </h3>
        <h3>上課時間: 主日上午 11:00</h3>
        <h3>老師: 王永姊妹</h3>
        <h3 className="text-underline">
          <a href="" target="_blank" rel="noopener noreferrer">
            <strong>課堂講義</strong>
          </a>
        </h3>
      </main>
    </>
  );
};

export default SundaySchoolPage;
