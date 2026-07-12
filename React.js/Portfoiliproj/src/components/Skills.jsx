import "./Skills.css";

import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/JS.png";
import JAVA from "../assets/JAVA.png";
import FIGMA from "../assets/FIGMA.png";
import GITHUB from "../assets/GITHUB.png";
import { useState } from "react";

export default function Skills() {
    const [flippedCard, setFlippedCard] = useState(null);
  return (
    <section id="skills" className="skills">

      <h1 className="skills-title">Tech Orbit</h1>


      <div className="slider">

        <div className="orbit">
          
          <div
  className="tech-card html"
  onClick={() =>
    setFlippedCard(flippedCard === "html1" ? null : "html1")
  }
>
  <div className={`tech ${flippedCard === "html1" ? "flipped" : ""}`}>

    <div className="front">
      <img src={HTML} alt="HTML" />
      <span>HTML</span>
    </div>

    <div className="back">
      <h3>HTML</h3>
      <p>
        I use HTML to create structured and semantic web pages.
      </p>
    </div>

  </div>
</div>

         
        <div className="tech-card css" onClick={() =>setFlippedCard(flippedCard === "css1" ? null : "css1")}>
            <div className={`tech ${flippedCard === "css1" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={CSS} alt="CSS" />
                    <span>CSS</span>
                </div>

                <div className="back">
                    <h3>CSS</h3>
                    
                    <p>I use CSS to design modern and responsive user interfaces.I work with Flexbox, Grid, animations, transitions, gradients, and hover effects.</p>
                </div>
            </div>
        </div>


         
         
          <div className="tech-card javascript" onClick={() =>setFlippedCard(flippedCard === "javascript1" ? null : "javascript1")}>
            <div className={`tech ${flippedCard === "javascript1" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={JS} alt="JAVASCRIPT" />
                    <span>JAVASCRIPT</span>
                </div>

                <div className="back">
                    <h3>JAVASCRIPT</h3>
                    
                    <p> I use JavaScript to build interactive and dynamic websites.
  I have experience with DOM manipulation, events, functions, arrays, and asynchronous programming.</p>
                </div>
            </div>
        </div>
         
        <div className="tech-card java" onClick={() =>setFlippedCard(flippedCard === "java1" ? null : "java1")}>
            <div className={`tech ${flippedCard === "java1" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={JAVA} alt="JAVA" />
                    <span>JAVA</span>
                </div>

                <div className="back">
                    <h3>JAVA</h3>
                    
                    <p> I develop object-oriented applications using Java. I understand OOP concepts, exception handling, collections, file handling, JDBC, and basic Swing.</p>
                </div>
            </div>
        </div>
          
        <div className="tech-card github" onClick={() =>setFlippedCard(flippedCard === "github1" ? null : "github1")}>
            <div className={`tech ${flippedCard === "github1" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={GITHUB} alt="GITHUB" />
                    <span>GITHUB</span>
                </div>

                <div className="back">
                    <h3>GITHUB</h3>
                    
                    <p>I use GitHub for version control and project collaboration.
  I can manage repositories, commits, branches, pull requests, and deploy projects.</p>
                </div>
            </div>
        </div>
        
          <div className="tech-card figma" onClick={() =>setFlippedCard(flippedCard === "figma1" ? null : "figma1")}>
            <div className={`tech ${flippedCard === "figma1" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={FIGMA} alt="FIGMA" />
                    <span>FIGMA</span>
                </div>

                <div className="back">
                    <h3>FIGMA</h3>
                    
                    <p>I use Figma to design clean and user-friendly interfaces.
  I create wireframes, prototypes, UI components, and responsive layouts before development.</p>
                </div>
            </div>
        </div>
              <div
  className="tech-card html"
  onClick={() =>
    setFlippedCard(flippedCard === "html2" ? null : "html2")
  }
>
  <div className={`tech ${flippedCard === "html2" ? "flipped" : ""}`}>

    <div className="front">
      <img src={HTML} alt="HTML" />
      <span>HTML</span>
    </div>

    <div className="back">
      <h3>HTML</h3>
      <p>
        I use HTML to create structured and semantic web pages.
      </p>
    </div>

  </div>
</div>

         
        <div className="tech-card css" onClick={() =>setFlippedCard(flippedCard === "css2" ? null : "css2")}>
            <div className={`tech ${flippedCard === "css2" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={CSS} alt="CSS" />
                    <span>CSS</span>
                </div>

                <div className="back">
                    <h3>CSS</h3>
                    
                    <p>I use CSS to design modern and responsive user interfaces.I work with Flexbox, Grid, animations, transitions, gradients, and hover effects.</p>
                </div>
            </div>
        </div>


         
         
          <div className="tech-card javascript" onClick={() =>setFlippedCard(flippedCard === "javascript2" ? null : "javascript2")}>
            <div className={`tech ${flippedCard === "javascript2" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={JS} alt="JAVASCRIPT" />
                    <span>JAVASCRIPT</span>
                </div>

                <div className="back">
                    <h3>JAVASCRIPT</h3>
                    
                    <p> I use JavaScript to build interactive and dynamic websites.
  I have experience with DOM manipulation, events, functions, arrays, and asynchronous programming.</p>
                </div>
            </div>
        </div>
         
        <div className="tech-card java" onClick={() =>setFlippedCard(flippedCard === "java2" ? null : "java2")}>
            <div className={`tech ${flippedCard === "java2" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={JAVA} alt="JAVA" />
                    <span>JAVA</span>
                </div>

                <div className="back">
                    <h3>JAVA</h3>
                    
                    <p> I develop object-oriented applications using Java. I understand OOP concepts, exception handling, collections, file handling, JDBC, and basic Swing.</p>
                </div>
            </div>
        </div>
          
        <div className="tech-card github" onClick={() =>setFlippedCard(flippedCard === "github2" ? null : "github2")}>
            <div className={`tech ${flippedCard === "github2" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={GITHUB} alt="GITHUB" />
                    <span>GITHUB</span>
                </div>

                <div className="back">
                    <h3>GITHUB</h3>
                    
                    <p>I use GitHub for version control and project collaboration.
  I can manage repositories, commits, branches, pull requests, and deploy projects.</p>
                </div>
            </div>
        </div>
        
          <div className="tech-card figma" onClick={() =>setFlippedCard(flippedCard === "figma2" ? null : "figma2")}>
            <div className={`tech ${flippedCard === "figma2" ? "flipped" : ""}`}>
                <div className="front">
                    <img src={FIGMA} alt="FIGMA" />
                    <span>FIGMA</span>
                </div>

                <div className="back">
                    <h3>FIGMA</h3>
                    
                    <p>I use Figma to design clean and user-friendly interfaces.
  I create wireframes, prototypes, UI components, and responsive layouts before development.</p>
                </div>
            </div>
        </div>
      </div>
      </div>

      {/* Keep learning card outside animation */}

      


    </section>
  );
}