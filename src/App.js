import React from 'react';
import './App.css';
// console.log("Azmat")
function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">WebHook</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to WebHook</h1>
          <p>Build powerful integrations with ease</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Fast</h3>
            <p>Lightning-quick webhook delivery</p>
          </div>
          <div className="feature-card">
            <h3>Reliable</h3>
            <p>99.9% uptime guarantee</p>
          </div>
          <div className="feature-card">
            <h3>Secure</h3>
            <p>End-to-end encryption</p>
          </div>
          <div className="feature-card">
            <h3>Easy</h3>
            <p>Simple API integration</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>WebHook is the leading platform for webhook management and delivery.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: info@webhook.com</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 WebHook. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
