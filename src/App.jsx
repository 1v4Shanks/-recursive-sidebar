import React from "react";
import TreeView from "./Tree-view/tree";
import menu from "./Tree-view/data";
import "./App.css";

export default function App() {
  return (
    <div className="main-container">
      <TreeView menus={menu} />
    </div>
  );
}
