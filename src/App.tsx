import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './page/home/home.tsx';
import Chat from './page/chat/chat.tsx';
import PostSaved from './page/postSaved/postSaved.tsx';
import Notification from './page/notification/notification.tsx';
import Profile from './page/profile/profile.tsx';
import { StyledGlobal } from "./GlobalStyle.ts";



function App() {

  return (
    <>
    <StyledGlobal/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/posts_salvados" element={<PostSaved/>}></Route>
        <Route path="/notification" element={<Notification/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
