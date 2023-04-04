import Navbar from "./navbar/Navbar";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Register from './pages/register/Register';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Home from './pages/home/Home'
import {
  BrowserRouter ,
  Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route exact path="/register" element={<Register/>} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
        </Routes>
        <Routes>
          <Route exact path="/settings" element={<Settings/>} />
        </Routes>
        <Routes>
          <Route exact path="/write" element={<Write/>} />
        </Routes>
        <Routes>
          <Route exact path="/post/:postId" element={<Single/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
