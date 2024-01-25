import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { ForgotPassword } from "./components/forgot-password/ForgotPassword";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from "./components/dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/forgot-password" exact element={<ForgotPassword />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
