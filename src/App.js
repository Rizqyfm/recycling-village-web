import "./App.css";
import rvLogo from "./img/official-logo.png";
import background from "./img/background.png";

function App() {
  return (
    <div className="wrapper">
      <section className="navbar">
        <img className="logoImg" src={rvLogo} alt="Recycling Village logo" />
      </section>
      <section
        className="content flex flex-col justify-center gap-y-12"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <section className="words flex flex-col">
          <h1 className="title sm:text-sm text-headingOne text-center font-bold ">
            RV Website is coming soon :)
          </h1>

          <h2 className="sub-title text-headingThree text-center">
            In the meantime, you can follow us on Instagram or chat with us
            through WhatsApp
          </h2>
        </section>
        <section className="buttons flex justify-center gap-x-12">
          <button className="button instagram-cta flex items-center gap-x-4 bg-sun font-bold">
            <i class="fa-brands fa-instagram"></i>Follow us
          </button>
          <button className="button whatsapp-cta flex items-center gap-x-4 bg-sun font-bold">
            <i class="fa-brands fa-whatsapp"></i>Chat with us
          </button>
        </section>
      </section>
    </div>
  );
}

export default App;
