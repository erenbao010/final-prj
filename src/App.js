import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import PrimaryLayout from "./components/Layout/Layout";


function App() {
  useEffect(() => {
    document.title = "KITS Store";
  }, []);
  return (
    <div className="App">
      <PrimaryLayout>

      </PrimaryLayout>
    </div>
  );
}

export default App;
