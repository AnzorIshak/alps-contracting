import "./styles.css";

function Hero() {
  return (
    <div style={{ backgroundColor: "deepskyblue", minHeight: "100px" }}>
      <h1>Hero</h1>
      <div className="navbar-container">
        <div className="navbar-image-container">
          <a href="default">
            <img
              className="navbar-image"
              src={"./assets/logo-with-text.png"}
              alt="Alps Logo"
            />
          </a>
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <div className="navbar-item-container">
          <a className="navbar-item" href="default">
            Home
          </a>
          <a className="navbar-item" href="about">
            About
          </a>
          <a className="navbar-item" href="our-services">
            Our Services
          </a>
          <a className="navbar-item" href="contact-us">
            Contact Us
          </a>
          <a className="navbar-item" href="number">
            +1(862)247-9083
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
