import React from 'react';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>SHREYA<span>MOHITE</span></div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#stack">Ecosystem</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.section} id="about">
        <div className={styles.hero}>
          <div className={styles.badge}>Available for Core Roles & Projects</div>
          <h1>Building Scalable,<br />Full-Stack Web Experiences.</h1>
          <p>
            Hi, I'm Shreya Mohite. A MERN Stack Developer dedicated to turning complex 
            backend logic and fluid user interfaces into high-performance web applications.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.btnPrimary}>View My Work</a>
            <a href="#contact" className={styles.btnSecondary}>Let's Talk</a>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className={styles.section} id="stack">
        <h2 className={styles.sectionTitle}>Technical Ecosystem</h2>
        <div className={styles.ecosystemGrid}>
          <div className={styles.stackCard}>
            <h3>Frontend Development</h3>
            <p>React.js, Next.js, Redux Toolkit, HTML5/CSS3, JavaScript (ES6+)</p>
          </div>
          <div className={styles.stackCard}>
            <h3>Backend Architecture</h3>
            <p>Node.js, Express.js, RESTful APIs, WebSockets (Socket.io)</p>
          </div>
          <div className={styles.stackCard}>
            <h3>Database & Tooling</h3>
            <p>MongoDB, Mongoose, Git/GitHub, Docker, Postman</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section} id="projects">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <div className={styles.projectVisual}>MERN</div>
            <div className={styles.projectInfo}>
              <h3>Enterprise Analytics Dashboard</h3>
              <p>
                A high-frequency web dashboard utilizing WebSockets for real-time data 
                streaming and custom aggregation pipelines to prevent database bottlenecking.
              </p>
              <div className={styles.tagGroup}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Node.js</span>
                <span className={styles.tag}>MongoDB</span>
                <span className={styles.tag}>Socket.io</span>
              </div>
              <div className={styles.projectLinks}>
                <a href="#live">Live Demo ↗</a>
                <a href="#github">GitHub ↗</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <div className={styles.projectVisual}>NEXT</div>
            <div className={styles.projectInfo}>
              <h3>E-Commerce Ecosystem</h3>
              <p>
                An optimized shopping platform featuring JWT-based session handling, 
                Stripe payment infrastructure, and granular inventory controls.
              </p>
              <div className={styles.tagGroup}>
                <span className={styles.tag}>Next.js</span>
                <span className={styles.tag}>Express</span>
                <span className={styles.tag}>Stripe API</span>
                <span className={styles.tag}>Redux</span>
              </div>
              <div className={styles.projectLinks}>
                <a href="#live">Live Demo ↗</a>
                <a href="#github">GitHub ↗</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer} id="contact">
        <h2>Let's build something intentional.</h2>
        <p>Seeking technical challenges, full-stack roles, or project collaborations.</p>
        <a href="mailto:shreya.mohite@example.com" className={styles.emailLink}>
          shreya.mohite@yourdomain.com
        </a>
      </footer>
    </div>
  );
}
