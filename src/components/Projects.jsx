import React, { useState } from 'react';
import p1 from './img/p1.jpg';
import p2 from './img/p2.png';
import p3 from './img/p3.png';
import p4 from './img/p4.png';
import p5 from './img/p5.webp'; // Add more images as needed
// import p6 from './img/p6.png';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // List of all projects
  const projects = [
    {
      img: p4,
      title: 'Asset Management using MERN Stack',
      link: 'https://github.com/SantoshHrushith/Asset-Managment',
    },
    {
      img: p3,
      title: 'Unitrade: A platform to buy and sell goods',
      link: 'https://github.com/SantoshHrushith/Unitrade',
    },
    {
      img: p1,
      title: 'Tomato Leaf Disease Detection using CNN',
      link: 'https://github.com/SantoshHrushith/Tomato-Leaf-Disease-Detection',
    },
    {
      img: p2,
      title: 'Email Spam Classification',
      link: 'https://github.com/SantoshHrushith/Spam-Classification',
    },
    // {
    //   img: p2,
    //   title: 'Movie Recommendation System',
    //   link: 'https://github.com/SantoshHrushith/Movie-Recommendation-System',
    // },
    {
      img: p5,
      title: 'Chat Application using MERN Stack',
      link: 'https://github.com/SantoshHrushith/Chat-Application',
    },
  ];

  // Determine which projects to display based on state
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="project-main">
      <h2>Projects</h2>

      <div className="project-container">
        {visibleProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-title">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div 
        className="more" 
        onClick={() => setShowAll(!showAll)} 
        style={{ cursor: 'pointer', color: 'blue', marginTop: '10px' }}
      >
        {showAll ? 'Show less...' : 'View more...'}
      </div>
    </div>
  );
};

export default Projects;
