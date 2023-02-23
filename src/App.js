import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./pages/home/home.css";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import Story from "./pages/story/Story";
// import Closing from "./Closing";
import Footer from "./Footer";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
