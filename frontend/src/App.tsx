import { Outlet } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/Nav/NavBar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
