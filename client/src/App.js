import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portal from "./components/Portal";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import RecipeCreation from "./components/RecipeCreation";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? null : (
        <>
          <NavBar />
        </>
      )}
      <Routes>
        <Route exact path="/" element={<Portal />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/create-recipe" element={<RecipeCreation />} />
      </Routes>
    </div>
  );
}

export default App;
