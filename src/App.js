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
import ModalTest from './components/custom-model-popup/modal-test';
import GithubProfilefinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete-with-api';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}

      {/* Load More Data Component*/}
      {/* <LoadMoreData /> */}

      {/* Tree View Component / Menu UI Component / Recursive Navigation Menu*/}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generate Component */}
      {/* <QRCodeGenerator /> */}

      {/* Light and Dark Theme Component */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs Component */}
      {/* <TabTest /> */}

      {/* Custom Modal Popup Component */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder Component */}
      {/* <GithubProfilefinder /> */}

      {/* Search Autocomplete With API Component */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe Component */}
      {/* <TicTacToe /> */}

      {/* Feature Flags Implementation Component */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook Component */}
      <UseFetchHookTest />

    </div>
  );
}

export default App;