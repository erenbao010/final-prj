import { Routes, Route, Outlet } from "react-router-dom";
import Login from "pages/Login";
import PrimaryLayout1 from "components/Layout/Layout2";
import Dashboard from "containers/Dashboard";
import ListBook from "containers/User/ListBook";
import About from "containers/About";
import Home from "containers/Home";
const PrimaryLayout2 = () => {
  return (
    <div>
      {/* Nếu đường dẫn là /admin thì mới render Routes bên trong */}
      {window.location.pathname === "/dashboard" && (
        <PrimaryLayout1>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book" element={<ListBook />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </PrimaryLayout1>
      )}
      <Outlet />
    </div>
  );
};
export default PrimaryLayout2;
