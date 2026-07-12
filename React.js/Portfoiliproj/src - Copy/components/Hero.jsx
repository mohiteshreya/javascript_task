import "./Hero.css";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
    id="home"
    className="hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
>
        <nav>
             <div className="logo">
             <span className="white">Shreya</span>
             <span className="purple">Mohite</span>
             </div>
            <ul>
                 <li><a href="#home" className="active">Home</a></li>
                 <li><a href="#about">About</a></li>
                 <li><a href="#skills">Skills</a></li>
                 <li><a href="#projects">Projects</a></li>
                 <li><a href="#contact">Contact</a></li>
            </ul>
            <button>Resume</button>
        </nav>
    <div className="hero-content">
      <div className="left">

        <p className="greeting">👋 Hi, I'm</p>

        <h1>
          <span className="white">Shreya</span>{" "}
          <span className="purple">Mohite</span>
        </h1>

        <h2>Mern Stack Developer</h2>

        <p className="desc">
          I'm a Computer Engineering student and an aspiring Mern Stack Developer passionate about building modern, responsive, and user-friendly web applications.
          I enjoy turning ideas into interactive digital experiences while continuously learning new technologies.
        </p>

        <div className="buttons">
          <button>View Projects</button>
          <button className="outline">Contact Me</button>
        </div>

      </div>

      <div className="right">
        <div id="glow">
          <div id="photo">
             <img src={profile} alt="Shreya Mohite" />
          </div>
        </div>
      </div>
      </div>

    </motion.section>
    

  );
  
}