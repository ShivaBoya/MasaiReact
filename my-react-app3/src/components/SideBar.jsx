import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/projects">📁 Projects</Link></li>
      </ul>
    </aside>
  );
}