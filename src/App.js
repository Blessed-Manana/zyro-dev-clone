import './App.css';
import React from 'react';
import ZyroStories from './components/zyroStories/ZyroStories';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import WebsiteBuildplan from './components/websiteBuildplan/WebsiteBuildplan';
import Promo from './components/promo/Promo';
import SellOnline from './components/sellOnline/SellOnline';
import WebsiteTemplates from './components/websiteTemplates/WebsiteTemplates';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <WebsiteBuildplan />
      <ZyroStories/>
      <Promo/>
      <SellOnline/>
      <WebsiteTemplates/>
    </div>
  );
}

export default App;
