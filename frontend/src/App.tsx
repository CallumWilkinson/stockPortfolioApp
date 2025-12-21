import { Outlet } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/Nav/NavBar";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";

function App() {
  return (
    <>
      <UserProvider>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <ToastContainer></ToastContainer>
      </UserProvider>
    </>
  );
}

export default App;
