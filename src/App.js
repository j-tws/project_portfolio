import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'
import TechSkills from './components/TechSkills'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Router>

      
      <header>
        <nav>
          <ul>
          <li><Link>About me</Link></li>
          <li><Link>Projects</Link></li>
          <li><Link>Tech Skills</Link></li>
          <li><Link>Experience</Link></li>
          <li><Link>Contact</Link></li>
          <li><Link>Resume</Link></li>
            
          </ul>
        </nav>
        <h1 className="text-3xl font-bold underline">
          Hello there! My name is JT
        </h1>
        <h2>A Full Stack Web Developer based in Melbourne</h2>
      </header>

      <AboutMe/>
      <TechSkills/>
      <Projects/>
      <Contact/>

      <Routes>
          {/* <Route path='/' element={<AboutMe/>} />
          <Route path='/' element={<Projects/>} /> */}
      </Routes>

      </Router>
    </div>
  );
}

export default App;
