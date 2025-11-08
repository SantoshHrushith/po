import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjusted threshold for better visibility
    triggerOnce: false, // Trigger animation only once
  });

  return (
    <motion.div
      className="contact-info"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      ref={ref}
    >
      <h1>Contact Me</h1>
      <p>If you have any questions, opportunities, or just want to say hi, feel free to reach out to me!</p>

      <div className='con-cont'>
        <motion.div
          className="contact-details"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="detail">
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:hrushith2004@gmail.com">hrushith2004@gmail.com</a>
          </div>
          <div className="detail">
            <i className="bi bi-linkedin"></i>
            <a href="https://www.linkedin.com/in/santosh-hrushith-yelamanchili-18b165276/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="detail">
            <i className="bi bi-github"></i>
            <a href="https://github.com/SantoshHrushith" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="detail">
            <i className="bi bi-twitter"></i>
            <a href="https://x.com/SantoshHrushith" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </motion.div>

        <motion.div
          className='cv-ab'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <a href="Santosh_Hrushith_Resume_SDE.pdf" download="SantoshHrushith_CV.pdf">Download CV</a>
        </motion.div>
      </div>

      <motion.div
        className="footer"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; 2024 Santosh Hrushith. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
