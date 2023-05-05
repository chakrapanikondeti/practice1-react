import logo from "./logo.svg";
import "./App.css";
import CallingAbout from "./Components/CallingAbout";
import UseStateExample from "./Components/UseStateExample";
import ConditionalComponent from "./Components/ConditionalComponent";
import OnChangeExample from "./Components/OnChangeExample";
import OnClickExample from "./Components/OnClickExample";
import ReuseableExample from "./Reuseable/ReuseableExample";
import UseEffectExample from "./ReactHooks/UseEffectExample";
import UseRefExample from "./ReactHooks/UseRefExample";
import UseReducerExample from "./ReactHooks/UseReducerExample";

import UseReducerStudentList from "./ReactHooks/UseReducerStudentList";
import UseReducerCounter from "./ReactHooks/UseReducerCounter";
import UseMemoExample from "./ReactHooks/UseMemoExample";

function App() {
  return (
    <>
      {/* <CallingAbout />
      <hr />
      <UseStateExample />
      <hr />
      <ConditionalComponent />
      <hr />
      <OnChangeExample />
      <hr />

      <OnClickExample />
      <hr />
      <ReuseableExample />
      <br />
      <UseEffectExample />
      <br />
      <br />
      <UseRefExample />
      <br />
      <br />
      <hr /> */}
      <UseReducerExample />
      <hr />
      <UseReducerCounter />
      <UseReducerStudentList />
      <UseMemoExample />
    </>
  );
}

export default App;
