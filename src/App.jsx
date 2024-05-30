import LeftBar from "./components/LeftBar";
import Main from "./components/Main";
import RightBar from "./components/RightBar";
import "./App.css";

function App() {
  
  return (
   <div className="root">
    <LeftBar />
    <Main />
    <RightBar />
   </div>
  )
}

export default App;
