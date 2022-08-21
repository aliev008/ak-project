import "./App.scss";
import OnePictureBlock from "./components/onePictureBlock/onePictureBlock";
import ThreePicturesBlock from "./components/threePicturesBlock/threePicturesBlock";
import BannerBlock from "./components/bannerBlock/bannerBlock";
import ServicesBlock from "./components/servicesBlock/servicesBlock";

function App() {
  return (
    <div className="wrapper">
      <OnePictureBlock />
      <ThreePicturesBlock />
      <BannerBlock />
      <ServicesBlock />
    </div>
  );
}

export default App;
