import { motion } from "framer-motion";
import "./LandingRoom.css";
import { useState } from "react";


export default function LandingRoom({ openPortfolio }) {
  const [entering, setEntering] = useState(false);

  return (
    

<motion.div
  className="room"
  animate={{
     scale: entering ? 1.08 : 1,
    
  }}
  transition={{
    duration: 1.3,
    ease: [0.76, 0, 0.24, 1],
  }}
>
  <motion.div
  className="room-overlay"
  initial={{ opacity: 0 }}
  animate={{
    opacity: entering ? 0.7 : 0,
  }}
  transition={{
    duration: 0.3,
  }}
/>

<div className="lamp"></div>

<div className="plant"></div>

<div className="coffee"></div>

<div className="book"></div>

<div className="phone"></div>

<div className="particles"></div>

<motion.div
className="room-about"

animate={
  entering
    ? {
        x: 220,
        y: 120,
        scale: 0.2,
        opacity: 0,
      }
    : {
        y: [0, -10, 0],
        x: 0,
        scale: 1,
        opacity: 1,
      }
}

transition={
  entering
    ? {
        duration: 0.7,
        ease: "easeInOut",
      }
    : {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
}
>
About
</motion.div>
<motion.div
  className="room-skills"
  animate={
  entering
    ? {
        x: 180,
        y: -120,
        scale: 0.2,
        opacity: 0,
      }
    : {
        y: [0, -12, 0],
        x: 0,
        scale: 1,
        opacity: 1,
      }
}
  transition={
  entering
    ? {
        duration: 0.7,
        ease: "easeInOut",
      }
    : {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
}
>
  Skills
</motion.div>

<motion.div
  className="room-projects"
  animate={
  entering
    ? {
        x: -180,
        y: 120,
        scale: 0.2,
        opacity: 0,
      }
    : {
        y: [0, -8, 0],
        x: 0,
        scale: 1,
        opacity: 1,
      }
}
  transition={
  entering
    ? {
        duration: 0.7,
        ease: "easeInOut",
      }
    : {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
}
>
  Projects
</motion.div>

<motion.div
  className="room-contact"
  animate={
  entering
    ? {
        x: -160,
        y: -140,
        scale: 0.2,
        opacity: 0,
      }
    : {
        y: [0, -10, 0],
        x: 0,
        scale: 1,
        opacity: 1,
      }
}
  transition={
  entering
    ? {
        duration: 0.7,
        ease: "easeInOut",
      }
    : {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
}
>
  Contact
</motion.div>

<motion.div
  className="screen-hitbox"

  onClick={() => setEntering(true)}

  animate={
  entering
    ? {
        scale: 14,
        rotateX: -4,
        rotateY: 2,
        boxShadow: "0 0 120px rgba(139,92,246,0.9)",
      }
    : {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        boxShadow: "0 0 30px rgba(139,92,246,0.4)",
      }
}
    transition={{
  duration: 1.8,
  delay: 0.2,
  ease: [0.22, 1, 0.36, 1],
}}
  onAnimationComplete={() => {
    if (entering) {
      openPortfolio();
    }
  }}
>
  <div className="screen-text">
    <h2>{`</Portfolio>`}</h2>
    <p>Click to Explore</p>
  </div>

</motion.div>
</motion.div>

  )
}