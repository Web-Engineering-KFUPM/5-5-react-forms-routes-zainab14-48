// ================================================================
// PROJECT SETUP INSTRUCTIONS
// ================================================================
//
// Follow these steps to set up and run your React project:
//
// 1) Open your terminal and navigate into the project folder.
//    Example:
//      cd 5-5-react-route-form
//
// 2) Install all required dependencies.
//    Command:
//      npm i
//      (or)
//      npm install
//
// 3) Install React Router to handle routing between pages.
//    Command:
//      npm i react-router-dom
//
// 4) Start your local development server.
//    Command:
//      npm run dev
//
// 5) If your system blocks npm commands due to execution policy,
//    run the following command in PowerShell to allow temporary execution:
//
//      Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//
//    After running that, re-run the npm commands again.
//
// Note: To complete the TODO 2, first implement the TODO 1.
//
// ===========================
// TODO #1: Use app.jsx.jsx file. Apply React Router
// ===========================
//
// NOTE:
// - Don’t change any CSS.
//
// ================================================================

import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">🧑‍💻 Student Portal</div>

        <div className="links">
          <NavLink to="/" end className="navlink">
            Home
          </NavLink>

          <NavLink to="/about" className="navlink">
            About
          </NavLink>

          <NavLink to="/registration" className="navlink">
            Registration
          </NavLink>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<h2>404 — Not Found</h2>} />
        </Routes>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} React Student Portal</span>
      </footer>
    </div>
  );
}