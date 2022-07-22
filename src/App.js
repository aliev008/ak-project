import "./App.scss";
import OnePictureBlock from "./components/onePictureBlock/onePictureBlock";
import ThreePicturesBlock from "./components/threePicturesBlock/threePicturesBlock";
import BannerBlock from "./components/bannerBlock/bannerBlock";

function App() {
  return (
    <div className="wrapper">
      <OnePictureBlock />
      <ThreePicturesBlock />
      <BannerBlock />
    </div>
  );
}

export default App;
