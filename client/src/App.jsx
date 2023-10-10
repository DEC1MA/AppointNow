import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateBusiness from "./pages/CreateBusiness";
import ModifyBusiness from "./pages/ModifyBusiness";
import MyBusiness from "./components/MyBusiness";
import SingleEventPage from "./pages/SingleEventPage";
import SingleBusinessPage from "./pages/SingleBusinessPage";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </div>
  );
}

export default App;
