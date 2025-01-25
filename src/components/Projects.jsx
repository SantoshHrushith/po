import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import p1 from './img/p1.jpg';
import p2 from './img/p2.png';
import p3 from './img/p3.png';
import p4 from './img/p4.png';
import p5 from './img/p5.webp';
import p6 from './img/p6.png';
import p7 from './img/p7.webp';

const Projects = () => {
  const projects = [
    {
      img: p4,
      title: 'Asset Management using MERN Stack',
      link: 'https://github.com/SantoshHrushith/Asset-Managment',
      description: 'Developed a full-stack MERN application to manage assets efficiently. Built with MongoDB for database management, Express.js for server-side functionality, React for user interface, and Node.js for backend operations. Key features include real-time asset tracking, secure user authentication, and an intuitive multi-user dashboard for managing assets.',
    },
    {
      img: p3,
      title: 'Unitrade: A platform to buy and sell goods',
      link: 'https://github.com/SantoshHrushith/Unitrade',
      description: 'Built an e-commerce platform using Node.js and React. MongoDB handles product and user data, while Express.js and Node.js power the backend. Features include product listing, a user-friendly UI, secure login/logout, real-time updates for seamless buying and selling of goods, an integrated chat system for direct buyer-seller communication, and a quoting feature that allows buyers to propose their desired price for products.',
    },
    {
      img: p1,
      title: 'Tomato Leaf Disease Detection using CNN',
      link: 'https://github.com/SantoshHrushith/Tomato-Leaf-Disease-Detection',
      description: 'Implemented a deep learning project using Convolutional Neural Networks (CNNs) in TensorFlow and Keras to detect diseases in tomato leaves. Trained the model using the VGG16 architecture, built from scratch, achieving an accuracy of 97.5% in disease classification. Features include image pre-processing and precise identification of leaf diseases.',
    },
    {
      img: p2,
      title: 'Email Spam Classification',
      link: 'https://github.com/SantoshHrushith/Spam-Classification',
      description: 'Designed a machine learning model for spam classification using Python, Scikit-learn, and Natural Language Processing (NLP) techniques. Key features include text preprocessing (tokenization and stemming), TF-IDF vectorization, and classification using algorithms like Naive Bayes and SVM.',
    },
    {
      img: p5,
      title: 'Chat Application using MERN Stack',
      link: 'https://github.com/SantoshHrushith/Chat-Application',
      description: 'Developed a real-time chat application with MongoDB, Express.js, React, and Node.js (MERN Stack). Features include real-time messaging with Socket.io, secure user authentication, and intuitive chat UI design for seamless communication.',
    },
    {
      img: p6,
      title: 'Hospital Food Delivery Management',
      link: 'https://github.com/SantoshHrushith/Hospital-Food-Delivery-Management',
      description: 'Created a hospital food management system using the MERN stack. Features include role-based dashboards for food managers, pantry staff, and delivery personnel, and real-time tracking of food delivery.',
    },
    {
      img: p7,
      title: 'Movie Recommendation System',
      link: 'https://github.com/SantoshHrushith/Movie-Recommendation-System',
      description: 'Built a hybrid movie recommendation system combining content-based filtering (using TF-IDF and metadata analysis) and collaborative filtering (using Surprise library and SVD). Key features include personalized movie suggestions, filtering based on user preferences, and an efficient recommendation pipeline.',
    },

  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false); // Manage modal visibility

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalVisible(true); // Show the modal
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    setModalVisible(false); // Hide the modal
  };

  const { ref, inView } = useInView({
    threshold: 0.16, // 
    triggerOnce: false, 
  });

  return (
    <motion.div
      className="project-main"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1>Projects</h1>

      {/* Use ref to trigger visibility when the section comes into view */}
      <div className="project-container" ref={ref}>
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            onClick={() => handleProjectClick(project)}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={project.img} alt={project.title} />
            <div className="project-title">
              <a>
                {project.title}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display selected project details */}
      {isModalVisible && selectedProject && (
        <motion.div
          className="project-detail-overlay show" // Conditional class
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-detail">
            <button className="close-btn" onClick={closeProjectDetails}></button>
            <div className="project-detail-img">
              <img src={selectedProject.img} alt={selectedProject.title} />
              <h4>{selectedProject.title}</h4>
            </div>
            <div className="project-desc">
              <p>{selectedProject.description}</p>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                View Project on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
