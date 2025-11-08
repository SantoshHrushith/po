import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExperienceTimeline from './ExperienceTimeline';

const Experience = () => {
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
                    <h1>Experience</h1>


                    <ExperienceTimeline />

                </motion.div>
            </div >
        </motion.div >
    );
};

export default Experience;
