import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Project Tracker</h1>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}
