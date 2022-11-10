
import './App.css';
import {HashRouter as Router} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import TechSkills from './components/TechSkills';
import Contact from './components/Contact';
import HelloThere from './components/HelloThere';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-scroll';
import { useState } from 'react';
import { HiHome } from 'react-icons/hi';


function App() {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(pre => !pre)
  }

  return (
    <div className="App">
      <div className="relative bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 w-full">

      <Router>

      <header>
        <nav className="hidden md:block fixed bg-[#121C36B3] inset-x-0 w-full z-20 mx-auto p-1 text-stone-300">
          <div className="flex items-center justify-between">
            <div className="ml-3">
              <Link activeClass="active" to="hellothere" spy={true} smooth={true} className="cursor-pointer">
                <HiHome size={30}
                  color="#d6d3d1b3"
                  onMouseOver={ ({target})  => target.style.color="#fbbf24" }
                  onMouseOut={ ({target})  => target.style.color="#d6d3d1b3" }
              /></Link>
            </div>
              <div className="hidden space-x-12 text-xs md:flex items-center">
                <Link to="aboutme" spy={true} smooth={true} className='hover:text-amber-300 cursor-pointer'>About me</Link>

                <Link to="projects" spy={true} smooth={true} className='hover:text-amber-300 cursor-pointer'>Projects</Link>

                <Link to="techskills" spy={true} smooth={true} className='hover:text-amber-300 cursor-pointer'>Tech Skills</Link>

                <Link to="contact" spy={true} smooth={true} className='hover:text-amber-300 cursor-pointer'>Contact</Link>

                <a href="https://drive.google.com/file/d/1kvS0oMeWWEIN8BPgi2bBqZQLSjtnAdfF/view?usp=sharing" target="_blank" rel="noreferrer" className='hidden text-white px-4 py-2 border border-amber-300 rounded hover:bg-amber-300/40 md:block'>Resume</a>

              </div>           
            </div>
        </nav>

        <nav className="fixed inset-x-0 z-30 bg-[#000626b3] md:hidden">
          <div className="absolute right-0 m-3 p-2 bg-[#000626b3] rounded-md block cursor-pointer md:hidden" onClick={handleToggle}><GiHamburgerMenu size={30} color="#d6d3d1b3"/></div>

          {toggle && 
            <div id="menu" close={() => setToggle(false)} className="flex flex-col  items-center self-end text-stone-300 py-8 mt-10 space-y-6 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md transition duration-300 ease-in-out">
              <Link to="aboutme" spy={true} smooth={true} onClick={handleToggle}>About me</Link>

              <Link to="projects" spy={true} smooth={true} onClick={handleToggle}>Projects</Link>

              <Link to="techskills" spy={true} smooth={true} onClick={handleToggle}>Tech Skills</Link>

              <Link to="contact" spy={true} smooth={true} onClick={handleToggle}>Contact</Link>

              <a href="https://drive.google.com/file/d/1kvS0oMeWWEIN8BPgi2bBqZQLSjtnAdfF/view?usp=sharing" target="_blank" rel="noreferrer" className='text-white px-4 py-2 border border-amber-300 rounded hover:bg-amber-300/40'>Resume</a>
            </div>
          }
        </nav>
        
      </header>

      <nav className="hidden z-20 fixed top-1/2 left-4 md:flex">
        <ul>
          <li className="my-3">
            <a href="https://github.com/j-tws" rel="noreferrer" target="_blank"><AiFillGithub 
              size={30} 
              color="#d6d3d1b3"
              onMouseOver={ ({target})  => target.style.color="#fbbf24" }
              onMouseOut={ ({target})  => target.style.color="#d6d3d1b3" }
            /></a>
          </li>
          <li className="my-3">
            <a href="https://linkedin.com/in/justintanws" rel="noreferrer" target="_blank"><AiFillLinkedin  
              size={30} 
              color="#d6d3d1b3"
              onMouseOver={ ({target})  => target.style.color="#fbbf24" }
              onMouseOut={ ({target})  => target.style.color="#d6d3d1b3" }
            /></a>
          </li>
          <li className="my-3">
            <a href="mailto:justintws10@gmail.com" rel="noreferrer" target="_blank"><FiMail   
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

      </Router>

      <footer className="w-4/5 text-xs text-stone-300 m-auto px-3 pt-20 pb-10">
        <p>Created by Justin Tan with <span className="text-amber-400">React</span> and <span className="text-amber-400">Tailwind</span></p>
        <p>Design inspired by <a href="https://brittanychiang.com/" rel="noreferrer" className="text-amber-400"  target="_blank">Brittany Chiang</a></p>
      </footer>

      </div>
    </div>
  );
}

export default App;
