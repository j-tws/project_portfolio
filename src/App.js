import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'
import TechSkills from './components/TechSkills'
import Contact from './components/Contact'
import HelloThere from './components/HelloThere';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";


function App() {
  return (
    <div className="App">
      <div className="relative bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">

      <Router>

      
      <header>
        <nav className="absolute inset-x-0 container mx-auto p-2 text-stone-300">
          <div className="flex items-center justify-between">
            <div>
              Home Logo to put here
            </div>
            <div className="hidden space-x-12 text-xs md:flex items-center">
              <Link className='hover:text-amber-300'>About me</Link>
              <Link className='hover:text-amber-300'>Projects</Link>
              <Link className='hover:text-amber-300'>Tech Skills</Link>
              <Link className='hover:text-amber-300'>Contact</Link>
              <Link className='hidden text-white px-4 py-2 border border-amber-300 rounded hover:bg-amber-300/40 md:block'>Resume</Link>

            </div>
            

          </div>
        </nav>
        
      </header>

      <nav className="fixed top-1/2 left-4 border border-red-500">
        <ul>
          <li className="my-3">
            <a href="https://github.com/j-tws"><AiFillGithub 
              size={30} 
              color="#d6d3d1b3"
              onMouseOver={ ({target})  => target.style.color="#fbbf24" }
              onMouseOut={ ({target})  => target.style.color="#d6d3d1b3" }
            /></a>
          </li>
          <li className="my-3">
            <a href="https://linkedin.com/in/justintanws"><AiFillLinkedin  
              size={30} 
              color="#d6d3d1b3"
              onMouseOver={ ({target})  => target.style.color="#fbbf24" }
              onMouseOut={ ({target})  => target.style.color="#d6d3d1b3" }
            /></a>
          </li>
          <li className="my-3">
            <a href="https://linkedin.com/in/justintanws"><FiMail   
              size={30} 
              color="#d6d3d1b3"
              onMouseOver={ ({target})  => target.style.color="#fbbf24" }
              onMouseOut={ ({target})  => target.style.color="#d6d3d1b3" }
            /></a>
          </li>
          
        </ul>
      </nav>

      <HelloThere/>
      <AboutMe/>
      <TechSkills/>
      <Projects/>
      <Contact/>

      <Routes>
          {/* <Route path='/' element={<AboutMe/>} />
          <Route path='/' element={<Projects/>} /> */}
      </Routes>

      </Router>

      <footer className="w-4/5 text-xs border border-red-500 text-stone-300 m-auto px-3 pt-20 pb-10">
        <p>Created by Justin Tan with <span className="text-amber-400">React</span> and <span className="text-amber-400">Tailwind</span></p>
        <p>Design inspired by <a href="https://brittanychiang.com/" className="text-amber-400">Brittany Chiang</a></p>
      </footer>

      </div>
    </div>
  );
}

export default App;
