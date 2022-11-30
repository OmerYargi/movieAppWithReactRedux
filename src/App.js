import React from 'react';
import Content from "./components/Content";
import Details from './components/Details';
import Sidebar from "./components/Sidebar";
import "./scss/main.css"


function App() {

  return (
    <div id="container">
      <Sidebar />
      <Content />
      <Details />
    </div>
  );
}

export default App;
