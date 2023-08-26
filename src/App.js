import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReflixNavBar from "./components/ReflixNavbar";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import MovieDescription from "./pages/MovieDescription";
import { UsersData, } from "./config/constants";

function App() {
  const [usersData, setUsersData] = useState(UsersData);
  return (
    <Router>
      <div className="App">
        <ReflixNavBar usersData={usersData} setUsersData={setUsersData} />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Home usersData={usersData} setUsersData={setUsersData} />
              }
            />
            <Route
              path="/catalog"
              element={
                <Catalog usersData={usersData} setUsersData={setUsersData} />
              }
            />
            <Route
              path="/movies/:id"
              element={<MovieDescription usersData={usersData} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
