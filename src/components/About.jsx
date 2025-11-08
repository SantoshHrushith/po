import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExperienceTimeline from './ExperienceTimeline';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Triggers when 30% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      className="about-cont"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="about-main">

        {/* About Text Animation */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="about-html">
            <h1>About Me</h1>
            <p>
              Hello, I'm <b>Santosh Hrushith Yelamanchili</b> currently pursuing an undergraduate degree in <b>Btech Computer Science</b> at the <b>Indian Institute of Information and Technology (IIIT) Kottayam</b>. I'm passionate about creating impactful solutions through technology, whether it's developing full-stack web applications or exploring the possibilities of machine learning.
            </p>
            <p>
              In addition to my academic pursuits, I have a keen interest in problem-solving, data structures, and algorithms. I'm always eager to collaborate with like-minded individuals and contribute to projects that can positively impact society.
            </p>
          </div>

          {/* Skills List Animation */}
          <motion.div
            className="skills-list"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <div className="skills">
              <p><b>Education:</b> B.Tech in Computer Science Engineering — IIIT Kottayam (2022–2026)</p>
              <div className="skills-inline">
                <div className="skill-line"><strong>Languages:</strong> <span className="skill-items">C++, Python, JavaScript / TypeScript, SQL, HTML & CSS</span></div>
                <div className="skill-line"><strong>Full-Stack Development:</strong> <span className="skill-items">React.js, Next.js, Node.js, Express.js, MongoDB, Socket.io, REST APIs, GraphQL</span></div>
                <div className="skill-line"><strong>AI/ML & Data Science:</strong> <span className="skill-items">PyTorch, TensorFlow, Scikit-learn, Hugging Face, LangChain, Pandas, NumPy, Matplotlib</span></div>
                <div className="skill-line"><strong>Developer Tools:</strong> <span className="skill-items">Git, GitHub, VS Code, Jupyter Notebook, Google Colab</span></div>
                <div className="skill-line"><strong>Other:</strong> <span className="skill-items">Data Structures & Algorithms, OOP, Problem Solving</span></div>
              </div>
              <br></br>
              {/* <ExperienceTimeline /> */}
            </div>
            <div className='cv-ab'>
              <motion.a
                ref={ref}
                href="Santosh_Hrushith_Resume_SDE.pdf"
                download="SantoshHrushith_CV.pdf"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="cv-link"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div >
    </motion.div >
  );
};

export default About;
