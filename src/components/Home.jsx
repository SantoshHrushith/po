import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Programmer", "Web Developer", "AI Enthusiast"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const period = 1000;

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!inView) return;

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, inView]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setDelta(100);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="home-cont"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        ref={ref}
        className='home-main'
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="full-text">
          <h3>Hello there, I'm Santosh Hrushith</h3>
          <h3>
            And I'm a <span className="text">{text}</span>
          </h3>
        </div>
        <motion.div
          ref={ref}
          className="photo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={process.env.PUBLIC_URL + '/img.JPG'} alt="Profile" />
        </motion.div>
      </motion.div>

      {/* Motion Download CV Button */}
      <motion.div className='cv'>
        <motion.a
          ref={ref}
          href="SantoshHrushith_CV.pdf"
          download="SantoshHrushith_CV.pdf"
          whileTap={{ scale: 0.9, rotate: -2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="download-btn"
        >
          Download CV
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Home;
