import React , {useState} from "react";
import Products from "./components/Products";
import { Sidebar } from "./components/Sidebar";
const App = () => {

  const [appState,setAppState] = useState([]);
  const [update , setUpdata] = useState([])
  const newdata = (data) => {
    setAppState(data);
  }
  
  return <div className="App">
    <div className="flex_content">
    <Sidebar  newdata={newdata} />
    <Products appState={appState} />
    </div>
  </div>;
};

export default App;


