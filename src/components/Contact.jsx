import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Contact = () => {
  return (
    <div className="contact-info">
      <h2>Contact Me</h2>
      <p>If you have any questions, opportunities, or just want to say hi, feel free to reach out to me!</p>
      <div className='con-cont'>
      <div className="contact-details">
        <div className="detail">
          <i className="bi bi-envelope-fill"></i>
          <a href="mailto:hrushith2004@gmail.com">hrushith2004@gmail.com</a>
        </div>
        <div className="detail">
          <i className="bi bi-linkedin"></i>
          <a href="https://www.linkedin.com/in/santosh-hrushith-yelamanchili-18b165276/" target="_blank">LinkedIn</a>
        </div>
        <div className="detail">
          <i className="bi bi-github"></i>
          <a href="https://github.com/SantoshHrushith" target="_blank">GitHub</a>
        </div>
        <div className="detail">
          <i className="bi bi-twitter"></i>
          <a href="https://x.com/SantoshHrushith" target="_blank">Twitter</a>
        </div>
      </div>
      <div className='cv-ab'><a href="SantoshHrushith_CV.pdf" download="SantoshHrushith_CV.pdf">Download CV</a></div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Santosh Hrushith. All rights reserved.</p>
      </div>
    </div>

  )
}

export default Contact