import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './page/home/home.tsx';
import Chat from './page/chat/chat.tsx';
import Notification from './page/notification/notification.tsx';
import Profile from './page/profile/profile.tsx';
import Login from './page/login/login.tsx'
import Register from './page/register/register.tsx'
import { StyledGlobal } from "./globalStyle.ts";



function App() {

  return (
    <>
    <StyledGlobal/>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/notification" element={<Notification/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
