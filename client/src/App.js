import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FlexboxGrid } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Hero from "./components/Hero";
import Login from "./components/Login";
import ShoeDetails from "./components/ShoeDetails";
import SignUp from "./components/SignUp";
import MyListings from "./containers/MyListings";
import SellPage from "./containers/SellPage";
import ShoesPage from "./containers/ShoesPage";
import Topbar from "./containers/Topbar";
import WishlistPage from "./containers/WishlistPage";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = "";
  }

  useEffect(() => {
    const token = localStorage.token;
    if (
      typeof token !== "undefined" &&
      token.length > 1 &&
      token !== "undefined"
    ) {
      fetch("/auto_login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => setCurrentUser(user));
    } else {
      console.log("No token found, try logging in!");
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Topbar className= "Topbar" loggedIn={loggedIn} user={user} logOut={logOut} />
        <FlexboxGrid justify="center">
          <Routes>
            <Route path="/" element={<Hero loggedIn ={loggedIn} />} />
          </Routes>
          <FlexboxGrid.Item colspan={22}>
            <Routes>
              <Route path="/shoespage" element={<ShoesPage />} />
              <Route
                path="/login"
                element={<Login setCurrentUser={setCurrentUser} />}
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/sellpage" element={<SellPage />} />
              <Route path="/wishlistpage" element={<WishlistPage />} />
              <Route path="/mylistings" element={<MyListings />} />
              <Route path="/shoes/:id" element={<ShoeDetails />} />
              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </BrowserRouter>
  );
}

export default App;
