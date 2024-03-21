import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />

      {/* Random Color Component */}
      <RandomColor />

      {/* Star Rating Component */}
      <StarRating />

      {/* Image Slider Component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />

      {/* Load More Data Component*/}
      <LoadMoreData />

      {/* Tree View Component / Menu UI Component / Recursive Navigation Menu*/}
      <TreeView menus={menus} />

      {/* QR Code Generate Component */}
      <QRCodeGenerator />

      {/* Light and Dark Theme Component */}
      <LightDarkMode />

      {/* Scroll Indicator Component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />

      {/* Custom Tabs Component */}
      <TabTest />
    </div>
  );
}

export default App;
