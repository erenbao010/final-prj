import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import PrimaryLayout from "./components/Layout/Layout";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import BookList from "pages/BookList";
import BookDetails from "pages/BookDetails";
import CartShopping from "pages/Cart";
import Login from "pages/Login";
import PrimaryLayout1 from "components/Layout/Layout2";
import Dashboard from "containers/Dashboard";
import ListBook from "containers/User/ListBook";
import About from "containers/About";
import Home from "containers/Home";
import PrimaryLayout2 from "components/Layout/Layout3";
import Register from "components/Register/Register";
import ListBookCart from "components/ListBookCart";
import Component from "test";
import { useState } from "react";
function App() {
  const [showCounter, setShowCounter] = useState(false);
  console.log(showCounter);
  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  return (
    <div>
      <button onClick={toggleCounter}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <Dashboard />}
    </div>
  );
}

export default App;
