import "./styles/App.css";
import "./pages/home/home.css";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
