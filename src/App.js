import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import "./App.css";
import {Helmet} from "react-helmet"
 
function App() {
  return (
    <div className="app">
      <Helmet>
      <title>Twitter Home</title>
      <meta name="description" content="This is my home component"/>
      </Helmet>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
