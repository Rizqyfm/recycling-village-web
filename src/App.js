import "./App.css";
import rvLogo from "./img/official-logo.png";

function App() {
  return (
    <div className="wrapper">
      <section className="navbar">
        <img src={rvLogo} alt="Recycling Village logo" />
      </section>
      <section className="content">
        <h1 className="title">RV Website is coming soon</h1>
        <h2 className="sub-title">
          Anyway, thanks for checking. In the meantime, you can follow our
          Instagram.
        </h2>
        <button className="instagram-cta">Follow our Instagram</button>
      </section>
    </div>
  );
}

export default App;
