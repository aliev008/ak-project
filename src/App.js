import "./App.scss";
import OnePictureBlock from "./components/onePictureBlock/onePictureBlock";
import ThreePicturesBlock from "./components/threePicturesBlock/threePicturesBlock";

function App() {
  return (
    <div className="wrapper">
      <OnePictureBlock />
      <ThreePicturesBlock />
    </div>
  );
}

export default App;
