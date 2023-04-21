import MyComponent from "./componenets/MyComponent";

import "./App.css";
import HookCounter from "./componenets/HookCounter";
import HookStateForm from "./componenets/HookStateForm";
import UseEffects from "./componenets/UseEffects";
import MyGif from "./componenets/MyGif";
import DataFeatching from "./componenets/DataFeatching";
import ReducerClicker from "./componenets/ReducerClicker";

function App() {
  return (
    <div className="App">
      <ReducerClicker />

      {/*
      <DataFeatching />
      <MyGif />
      <UseEffects />
      <MyComponent />
       <HookStateForm />
    
    <HookCounter />*/}
    </div>
  );
}

export default App;
