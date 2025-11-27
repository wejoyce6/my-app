// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "animate.css";

// Homepage
function Home() {
  return (
    <section className="animate__animated animate__fadeInUp">
      <h2>Welcome to Your Path of Healing</h2>
      <p>
        Life can feel overwhelming, but you don’t have to face challenges alone.
        I provide compassionate, professional therapy designed to help you move
        forward with clarity and strength.
      </p>
      <p>
        Whether you’re struggling with substance use, navigating mental health
        concerns, working on relationship issues, or processing trauma —
        together we can create a safe space for healing and growth.
      </p>
      <p>
        My practice is 100% virtual across Florida, so you can connect from the
        comfort of your home while receiving high-quality, confidential care.
      </p>
      <img
        src="/headshot.jpg"
        alt="Bill Joyce, LMFT"
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "50%",
          margin: "20px auto",
          display: "block",
        }}
      />
    </section>
  );
}

function About() {
  return (
    <section className="animate__animated animate__fadeInLeft">
      <h2>About Me</h2>
      <p>
        I am a <strong>Licensed Marriage and Family Therapist</strong> and{" "}
        <strong>Florida Certified Addiction Counselor</strong>, dedicated to
        helping individuals, couples, and families navigate life’s challenges
        with compassion and clarity.
      </p>

      <p>
        Over the years, I have had the privilege of working in several
        behavioral health treatment centers, where I specialized in supporting
        people facing both mental health struggles and addiction. In addition to
        providing direct care, I have also served as{" "}
        <strong>Program Supervisor</strong>, a role that allowed me to mentor
        other clinicians and guide the development of therapeutic programs.
        These experiences have strengthened my ability to see the bigger picture
        while still focusing on the unique needs of each client.
      </p>

      <p>
        In my practice, I draw from a variety of evidence-based modalities,
        including <em>Solution-Focused Therapy</em>,{" "}
        <em>Narrative Therapy</em>, <em>Bowenian Therapy</em>,{" "}
        <em>Emotionally Focused Therapy (EFT)</em>, and{" "}
        <em>Cognitive Behavioral Therapy (CBT)</em>. This integrative approach
        allows me to tailor each session to meet your unique needs, whether
        we’re addressing individual struggles, strengthening relationships, or
        working through the impact of addiction.
      </p>

      <p>
        At the core of my work is the belief that growth happens when we feel
        safe, supported, and understood. My goal is to create a collaborative
        space where you can explore your story, uncover new perspectives, and
        build meaningful change for yourself and your relationships.
      </p>

      <img
        src="/me2.jpeg"
        alt="Bill Joyce, LMFT"
        style={{
          width: "250px",
          borderRadius: "100px",
          margin: "20px auto",
          display: "block",
        }}
      />
    </section>
  );
}

function Services() {
  return (
    <section className="animate__animated animate__fadeInRight">
      <h2>Services</h2>
      <ul>
        <li>Individual Therapy</li>
        <li>Couple&apos;s Therapy</li>
        <li>Family Therapy</li>
        <li>Trauma Therapy</li>
        <li>Psychosocial Assessments</li>
        <li>ESA Recommendations &amp; Letters</li>
      </ul>

      <a
        href="https://calendly.com/your-booking-link"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Schedule a Session
      </a>
    </section>
  );
}

function Insurance() {
  return (
    <section className="animate__animated animate__fadeInUp">
      <h2>Insurance &amp; Fees</h2>
      <ul>
        <li>Out-of-network with most plans; superbills provided</li>
        <li>HSA/FSA accepted</li>
        <li>Initial Intake: $200</li>
        <li>Standard Session: $150</li>
        <li>Couples/Family Session: $175</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="animate__animated animate__fadeInLeft">
      <h2>Contact</h2>
      <p>Email: bill@billjoycetherapy.com</p>
      <p>Phone: (954) 667-8242</p>

      <a
        href="https://calendly.com/your-booking-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a Consultation
      </a>

      <form action="https://formspree.io/f/mwprbpjl" method="POST">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <header>
          <h1>Bill Joyce, LMFT</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/services">Services</Link>
            <Link to="/insurance">Insurance</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>
            © {new Date().getFullYear()} Bill Joyce, LMFT. All rights
            reserved.
          </p>
          <p>Email: bill@billjoycetherapy.com | Phone: (954) 667-8242</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
