import "./styles/App.css";
import "./pages/home/home.css";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import Footer from "./Footer";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
