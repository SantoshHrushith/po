import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className='screen'>
      <div>
        <Navbar />
      </div>
      <div>

        <div id="home" className='home'><Home /></div>
        <div id="about" className='about'><About /></div>

        <div id="projects" className='projects'><Projects /></div>
        <div id="contact" className='contact'><Contact /></div>
      </div>
    </div>
  );
}

export default App;
