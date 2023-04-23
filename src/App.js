import React from "react"
import './App.css';
import StartMultiform from "./Components/StartMultiForm";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home-loan-enquiry" element={<StartMultiform/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
