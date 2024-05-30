import LeftBar from "./components/LeftBar";
import Main from "./components/Main";
import RightBar from "./components/RightBar";
import "./App.css";

function App() {
  
  return (
   <div className="root">
    <div className="component1"><LeftBar /></div>
    <div className="component2"><Main /></div>
    <div className="component3"><RightBar /></div>
   </div>
  )
}

export default App;
