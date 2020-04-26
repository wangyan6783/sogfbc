import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OurBeliefPage from "./pages/OurBeliefPage";
import ChurchHistoryPage from "./pages/ChurchHistoryPage";
import HoursPage from "./pages/HoursPage";
import BulletinPage from "./pages/BulletinPage";
import ServiceVideosPage from "./pages/ServiceVideosPage";
import PhotoGalleryPage from "./pages/PhotoGalleryPage";
import ChildrenMinistryPage from "./pages/ChildrenMinistryPage";
import EnglishMinistryPage from "./pages/EnglishMinistryPage";
import LifeGroupsPage from "./pages/LifeGroupsPage";
import SundaySchoolPage from "./pages/SundaySchoolPage";
import DiscipleTrainingPage from "./pages/DiscipleTrainingPage";
import DanceSchoolPage from "./pages/DanceSchoolPage";
import SupportUsPage from "./pages/SupportUsPage";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/our-belief" exact render={() => <OurBeliefPage />} />
          <Route
            path="/church-history"
            exact
            render={() => <ChurchHistoryPage />}
          />
          <Route path="/hours" exact render={() => <HoursPage />} />
          <Route path="/bulletin" exact render={() => <BulletinPage />} />
          <Route
            path="/service-videos"
            exact
            render={() => <ServiceVideosPage />}
          />
          <Route
            path="/photo-gallery"
            exact
            render={() => <PhotoGalleryPage />}
          />
          <Route
            path="/children-ministry"
            exact
            render={() => <ChildrenMinistryPage />}
          />
          <Route
            path="/english-ministry"
            exact
            render={() => <EnglishMinistryPage />}
          />
          <Route path="/life-groups" exact render={() => <LifeGroupsPage />} />
          <Route
            path="/sunday-school"
            exact
            render={() => <SundaySchoolPage />}
          />
          <Route
            path="/disciple-training"
            exact
            render={() => <DiscipleTrainingPage />}
          />
          <Route
            path="/dance-school"
            exact
            render={() => <DanceSchoolPage />}
          />
          <Route path="/support-us" exact render={() => <SupportUsPage />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
