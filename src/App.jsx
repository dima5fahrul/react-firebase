import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./components/auth";
import { Dashboard } from "./components/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
