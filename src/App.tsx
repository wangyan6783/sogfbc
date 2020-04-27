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
import navbarData from "./data/navbar.data.json";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar navbarData={navbarData.data} />
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route
            path="/our-belief"
            exact
            render={() => <OurBeliefPage sidebarData={navbarData.data[0]} />}
          />
          <Route
            path="/church-history"
            exact
            render={() => (
              <ChurchHistoryPage sidebarData={navbarData.data[0]} />
            )}
          />
          <Route
            path="/hours"
            exact
            render={() => <HoursPage sidebarData={navbarData.data[0]} />}
          />
          <Route
            path="/bulletin"
            exact
            render={() => <BulletinPage sidebarData={navbarData.data[1]} />}
          />
          <Route
            path="/service-videos"
            exact
            render={() => (
              <ServiceVideosPage sidebarData={navbarData.data[1]} />
            )}
          />
          <Route
            path="/photo-gallery"
            exact
            render={() => <PhotoGalleryPage sidebarData={navbarData.data[1]} />}
          />
          <Route
            path="/children-ministry"
            exact
            render={() => (
              <ChildrenMinistryPage sidebarData={navbarData.data[2]} />
            )}
          />
          <Route
            path="/english-ministry"
            exact
            render={() => (
              <EnglishMinistryPage sidebarData={navbarData.data[2]} />
            )}
          />
          <Route
            path="/life-groups"
            exact
            render={() => <LifeGroupsPage sidebarData={navbarData.data[2]} />}
          />
          <Route
            path="/sunday-school"
            exact
            render={() => <SundaySchoolPage sidebarData={navbarData.data[2]} />}
          />
          <Route
            path="/disciple-training"
            exact
            render={() => (
              <DiscipleTrainingPage sidebarData={navbarData.data[2]} />
            )}
          />
          <Route
            path="/dance-school"
            exact
            render={() => <DanceSchoolPage sidebarData={navbarData.data[3]} />}
          />
          <Route
            path="/support-us"
            exact
            render={() => <SupportUsPage sidebarData={navbarData.data[4]} />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
