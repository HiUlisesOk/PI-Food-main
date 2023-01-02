import "./App.css";
import { APP } from "./components/styles";
import { Routes, Route } from "react-router-dom";
import Portal from "./components/Portal";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import RecipeCreation from "./components/RecipeCreation";
import Favorites from "./components/Favorites";
import RecipeEdit from "./components/Edit";
import { useLocation } from "react-router-dom";
import { WrapContainer, WrapPanel } from "./components/styles";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const location = useLocation();

  return (
    <APP className="App">
      {location.pathname === "/" ? null : (
        <>
          <WrapContainer>
            <WrapPanel>
              <NavBar />
            </WrapPanel>
          </WrapContainer>
        </>
      )}

      <Routes>
        <Route exact path="/" element={<Portal />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/create-recipe" element={<RecipeCreation />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/edit/:id" element={<RecipeEdit />} />
      </Routes>
    </APP>
  );
}

export default App;
