import React, { useEffect, useState } from 'react';


const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Programmer", "Web Developer", "AI Enthusiast"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      // Pause when the word is fully displayed
      setIsDeleting(true);
      setDelta(period); // Set a delay for the pause
    } else if (isDeleting && updatedText === '') {
      // Pause when the word is fully deleted
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500); // Set a short delay to start typing the next word
    } else {
      setDelta(100); // Normal typing/deleting speed
    }
  };

  return (
    <div className="home-cont">
      <div className='home-main'>
        <div className="full-text">
          <p>Hello there, I'm Santosh Hrushith Y</p>
          <p>
            And I'm a <span className="text">{text}</span>
          </p>
        </div>
        <div className="photo">
          <img src="img.JPG" alt="Profile" />
        </div>
      </div>
      <div className='cv'><a href="SantoshHrushith_CV.pdf" download="SantoshHrushith_CV.pdf">Download CV</a></div>
    </div>

  );
};

export default Home;
