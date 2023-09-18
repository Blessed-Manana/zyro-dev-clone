import './App.css';
import ZyroStories from './components/zyroStories/ZyroStories';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import WebsiteBuildplan from './components/websiteBuildplan/WebsiteBuildplan';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <WebsiteBuildplan />
      <ZyroStories/>
    </div>
  );
}

export default App;
