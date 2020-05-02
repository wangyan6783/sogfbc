import React from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  sidebarData: sidebarData;
}
const DanceSchoolPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <main className="main-content">
        <h1>舞蹈學校</h1>
        <h2>課程</h2>
        <h3 className="text-underline">
          <strong>芭蕾基礎班 Pre-Ballet</strong>
        </h3>
        <h3>
          <strong>年齡 Age:</strong> 4-6 歲 (4-6)
        </h3>
        <h3>
          <strong>時間 Time:</strong> 12:00pm-1:00pm 星期六 (Saturday)
        </h3>
        <h3 className="text-underline">
          <strong>古典芭蕾班 Classical Ballet</strong>
        </h3>
        <h3>
          <strong>年齡 Age:</strong> 6 歲以上 (6 and up)
        </h3>
        <h3>
          <strong>時間 Time:</strong>
        </h3>
        <h3>
          <strong>A. 初/中級班 Beginning/Intermediate</strong>
        </h3>
        <h3>1:00pm-2:30pm 星期六 (Saturday)</h3>
        <h3>
          <strong>B. 中/高級班 Intermediate/Advanced</strong>
        </h3>
        <h3>2:30pm-4:00pm星期六 (Saturday)</h3>
        <h2>課程簡介</h2>
        <h3>芭蕾基礎班 Pre-Ballet</h3>
        <h3>
          學習芭蕾基本舞步並熟悉各種舞蹈語彙及肌肉掌控能力，培養小朋友的音樂節奏感及對舞蹈藝術的興趣，訓練孩子反應能力、肢體協調能力、身體的柔軟度，增加肢體的靈活運用，預備正統芭蕾訓練。
        </h3>
        <h3>古典芭蕾班 Classical Ballet</h3>
        <h3>
          認識古典芭蕾,培養正確姿勢及優美儀態；教導正確運用肌力及動作準確性。內容包括學習芭蕾基本動作、把桿練習、流動空間練習、旋轉能力訓練、柔軟度及彈性訓練、芭蕾術語、芭蕾小品舞蹈。
        </h3>
        <h3 className="text-underline">
          <strong>指導老師</strong>
        </h3>
        <h3 className="text-underline">
          <a
            href="http://media.fbny.org.s3.amazonaws.com/After%20School/2015-16%20HC%20AFTER%20SCHOOL%20REGISTRATION%20FORM.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>下載報名表</strong>
          </a>
        </h3>
      </main>
    </>
  );
};

export default DanceSchoolPage;
