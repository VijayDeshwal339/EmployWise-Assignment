import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import './App.css'
import EditUserPage from "./pages/EditUserPage";
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/edit-user/:id" element={<EditUserPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
