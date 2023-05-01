import logo from "./logo.svg";
import "./App.css";
import CallingAbout from "./Components/CallingAbout";
import UseStateExample from "./Components/UseStateExample";
import ConditionalComponent from "./Components/ConditionalComponent";
import OnChangeExample from "./Components/OnChangeExample";
import OnClickExample from "./Components/OnClickExample";
import ReuseableExample from "./Reuseable/ReuseableExample";

function App() {
  return (
    <>
      <CallingAbout />
      <UseStateExample />
      <ConditionalComponent />
      <hr />
      <OnChangeExample />
      <hr />

      <OnClickExample />
      <hr />
      <ReuseableExample />
    </>
  );
}

export default App;
