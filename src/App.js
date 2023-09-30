import "./App.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LandingPage from "./pages/LandingPage/landingPage";
import HomePage from "./pages/home-page/Home-page";
import RecorderMenu from "./components/recorderMenu";
import VideoPlayer from "./pages/VideoPage/VideoPage";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home/Home";
import Create from './pages/CreatePage/Create'
import Ready from './pages/Ready/Ready'


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage/>} />
        <Route path="/ready" element={<VideoPlayer/>} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/ready" element={<Ready />} />
      </Routes>
    </Router>
  ) 
}

export default App;