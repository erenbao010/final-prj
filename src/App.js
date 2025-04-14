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

function App() {
  useEffect(() => {
    document.title = "BookS Store";
  }, []);
  return (
    <div className="App">
      <PrimaryLayout2></PrimaryLayout2>

      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route path="/" element={<Header />} />
        </Route>

        <Route path="/list" element={<ListBookCart />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
