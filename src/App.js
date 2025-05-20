// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
import "./App.css";
// import ShowPhotographer from "./components/ShowPhotographer";
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import InforDetails from "./components/InforDetails";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/details"
          element={
            <>
              <Header />
              <InforDetails />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <Header />
              <InforDetails />
            </>
          }
        />
      </Routes>

      {/* <Header />
      <Sidebar />
      <ShowPhotogapher /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  );
}

export default App;
