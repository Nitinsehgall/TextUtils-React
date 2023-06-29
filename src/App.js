import "./App.css";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
  
//   Route,
  
// } from "react-router-dom";


function App() {
 
  const [mode, setMode] = useState('light'); 
const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type,
})
setTimeout(() => {
  setAlert(null);
  
}, 1500);
  }

const toggleMode = () =>{
if(mode === 'light'){
setMode('dark');
document.body.style.backgroundColor="#00001e";
showAlert("Dark mode Enabled","success")
}

else{
  setMode('light');
  document.body.style.backgroundColor="white"
  showAlert("Light mode Enabled","success")
}
}
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" About="About TextUtils " mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
      <div className="container my-3">
        

      {/* <routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForm heading="Enter The Text To Anaylse Below" mode={mode} showAlert={showAlert} />
          {/* </Route> */}
        {/* </routes> */}
      </div>
        {/* </Router> */}
        {/* <About /> */}
    </>
  );
}

export default App;
