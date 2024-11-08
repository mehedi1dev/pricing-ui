import "./App.css";
import { css } from "@emotion/css";
import SelectModeComponent from "./Components/SelectModeComponent";
import PriceCards from "./Components/PriceCards";

const containerStyle = css({
  maxWidth: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "16px",
});

function App() {
  return (
    <>
      <div className={containerStyle}>
        <SelectModeComponent />
        <PriceCards />
      </div>
    </>
  );
}

export default App;
