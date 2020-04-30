import React from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  sidebarData: sidebarData;
}

const ChurchHistoryPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <main className="main-content">
        <h1>教會簡史</h1>
        <h3>
          「恩霖信心聖經教會」開創於：2013年1月13日，為「信心聖經會」在紐約本地的植堂。起初，是租用法拉盛Cherry
          Ave一棟商住樓的二樓兩間教室，作為聚會場所。母會二十幾位弟兄姊妹，積極的參與，同心走出去，開始了這項植堂事工。經過了一年的時間，上帝給我們一個清楚的異象，將來要購地建堂。因此，從二零一四年開始，設立了一個「建堂異象基金」每年都達到預期目標。經過多年的禱告、預備，2018年7月，神讓我們看到了今天聚會的地方，以一百二十五萬簽約購入新址。當時，教會只有四十萬，在銀行給予一半的貸款下仍需籌措二十多萬，因著眾弟兄姊妹盡心盡力的擺上，同年11月14日，新地方順利過戶。之後，經過三個月時間，花費三十多萬全新裝修。最終於2019年3月3日，在原來租的地方最後一次主日崇拜後，眾弟兄姊妹一起，齊心努力、幹勁十足，一個下午的時間，正式搬入新堂。並於3月10日，開始第一次的主日崇拜。這一路都是神的手在作工，一切榮耀、讚美歸於神！
        </h3>
      </main>
    </>
  );
};

export default ChurchHistoryPage;
