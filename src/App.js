import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Common/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Common/Footer";
import Checkout from "./Pages/Home/Services/Checkout";
import RequirAuth from "./Pages/Common/RequirAuth";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/checkout"
          element={
            <RequirAuth>
              <Checkout></Checkout>
            </RequirAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
