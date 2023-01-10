import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/HomePage/Homepage";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login";
import Dummy from "./Pages/Dummy";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  let userID = useSelector((state) => state.auth);

  return (
    <>
      <BrowserRouter>
        {userID === null ? (
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  <Navbar />
                  <Login />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Homepage />
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/dummy"
              element={
                <>
                  <Navbar />
                  <Dummy />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Homepage />
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
