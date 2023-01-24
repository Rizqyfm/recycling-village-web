import "./styles/App.css";
import "./pages/home/home.css";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import Closing from "./Closing";
import Footer from "./Footer";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Home />
      <Closing />
      <Footer />
    </div>
  );
}

export default App;
