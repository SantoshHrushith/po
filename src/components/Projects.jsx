import React from 'react'
import p1 from './img/p1.jpg';
import p2 from './img/p2.png';
import p3 from './img/p3.png';
import p4 from './img/p4.png';



const Projects = () => {
  return (
    <div className="project-main" >
      <h2>Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <img src={p4} alt="Asset Management using MERN Stack" />
          <div className="project-title">Asset Management using MERN Stack</div>
        </div>
        

        <div className="project-card">
          <img src={p3} alt="Unitrade: A platform to buy and sell goods" />
          <div className="project-title">
            Unitrade: A platform to buy and sell goods
          </div>
        </div>

        <div className="project-card">
          <img src={p1} alt="Tomato Leaf Disease Detection using CNN" />
          <div className="project-title">
            Tomato Leaf Disease Detection using CNN
          </div>
        </div>

        <div className="project-card">
          <img src={p2} alt="Email Spam Classification" />
          <div className="project-title">Email Spam Classification</div>
        </div>
      </div>

      <div className="more">View more...</div>
    </div>

  )
}

export default Projects