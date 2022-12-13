import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portal from "./components/Portal";
import Home from "./components/Home";
import Details from "./components/Details";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Portal />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
