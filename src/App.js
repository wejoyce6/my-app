import React from "react";

function TherapySite() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Bill Joyce, LMFT</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#insurance">Insurance</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section>
        <h2>Welcome to Your Path of Healing</h2>
        <p>
          Providing compassionate virtual therapy across Florida. Specializing in substance use,
          mental health conditions, couples & families, and trauma recovery.
        </p>
      </section>

      {/* About */}
<section id="about">
  <h2>About Me</h2>
  <img 
    src="/me.jpg" 
    alt="Bill Joyce, LMFT" 
    style={{ width: "200px", borderRadius: "100px", marginTop: "20px" }} 
  />
  <p style={{ marginTop: "20px" }}>
    I’m Bill Joyce, LMFT — a male therapist passionate about helping people build resilience and heal.
    My approach is warm, collaborative, and grounded in evidence-based therapy.
  </p>
</section>


      {/* Services */}
      <section id="services">
        <h2>Services</h2>
        <ul>
          <li>Individual Therapy</li>
          <li>Couples & Family Therapy</li>
          <li>Mental Health Therapy</li>
          <li>Substance Use Counseling</li>
          <li>Trauma Therapy</li>
          <li>Psychosocial Assessments</li>
          <li>Emotional Service Animal (ESA) Letters</li>
        </ul>
      </section>

      {/* Insurance */}
      <section id="insurance">
        <h2>Insurance & Fees</h2>
        <ul>
          <li>Out-of-network with most plans; superbills provided</li>
          <li>HSA/FSA accepted</li>
          <li>Initial Intake: $200</li>
          <li>Standard Session: $150</li>
          <li>Couples/Family Session: $175</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: billjoycetherapy@example.com</p>
        <p>Phone: (954) 000-0000</p>
        <a href="https://calendly.com/your-booking-link" target="_blank" rel="noopener noreferrer">
          Book a Consultation
        </a>

        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Bill Joyce, LMFT. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TherapySite;
