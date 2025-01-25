import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
          <h1>About Me</h1>
          <p>
            Hello, I'm <b>Santosh Hrushith Yelamanchili</b> currently pursuing an undergraduate degree in <b>Btech Computer Science</b> at the <b>Indian Institute of Information and Technology (IIIT) Kottayam</b>. I'm passionate about creating impactful solutions through technology, whether it's developing full-stack web applications or exploring the possibilities of machine learning.
          </p>
          <p>
            In addition to my academic pursuits, I have a keen interest in problem-solving, data structures, and algorithms. I'm always eager to collaborate with like-minded individuals and contribute to projects that can positively impact society.
          </p>



          {/* Skills List Animation */}
          <motion.div
            className="skills-list"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <div className="skills">
              <p><b>Education:</b> B.tech in Computer Science Engineering IIIT Kottayam(2022-2026)</p>
              <p><b>Skills:</b> C++, Python, Javascript, SQL, HTML, CSS</p>
              <p><b>Frameworks:</b> Numpy, Tensorflow, Pandas, Scikit-learn, NodeJs, ExpressJs, ReactJs </p>
              <p><b>Experience:</b> Full Stack Web Developer Intern at Visakhapatnam Port Authority (June 2024 - July 2024)</p>
            </div>
            <div className='cv-ab'>
              <motion.a
                ref={ref}
                href="SantoshHrushith_CV.pdf"
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
