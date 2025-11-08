import React from 'react';

const ExperienceTimeline = () => {
    // ...static timeline markup...
    return (
        <div className="experience-timeline">
            <div className="timeline-line" />
            <div className="timeline-item right">
                <div className="timeline-date">Feb 2025 – Oct 2025</div>
                <div className="timeline-content">
                    <h4>Full Stack Web Developer & AI Intern</h4>
                    <p className="muted">The Sixty One</p>
                    <ul className='points'>
                        <li>Developed Shopify-based web applications and integrated GraphQL APIs with Next.js.</li>
                        <li>Implemented automated email systems and optimized backend performance.</li>
                        <li>Applied AI techniques to analyze data, build predictive models, and create dashboards.</li>
                    </ul>
                </div>
            </div>

            <div className="timeline-item left">
                <div className="timeline-date">June 2024 – July 2024</div>
                <div className="timeline-content">
                    <h4>Full Stack Web Developer Intern</h4>
                    <p className="muted">Visakhapatnam Port Authority</p>
                    <ul className='points'>
                        <li>Developed a real-time MERN stack asset management system with role-based access control.</li>
                        <li>Designed responsive React interfaces and optimized MongoDB schemas for performance.</li>
                        <li>Implemented secure authentication and dynamic forms for efficient asset tracking.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExperienceTimeline;
