import React from "react";
import AppHeader from "./components/AppHeader";
import AppLeftAside from "./components/AppLeftAside";
import AppRightAside from "./components/AppRightAside";
import AppMain from "./components/AppMain";

import './style.css';
import './components/AppHeader.css';

export default function App() {
  return (
    <div className="App">
        <AppHeader />
        <div className="App-content-grid">
                <AppLeftAside />
                <AppMain />
                <AppRightAside />
        </div>
    </div>
  );
}