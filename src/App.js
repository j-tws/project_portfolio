import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'
import TechSkills from './components/TechSkills'
import Contact from './components/Contact'
import HelloThere from './components/HelloThere';


function App() {
  return (
    <div className="App">
      <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">

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
      </div>
    </div>
  );
}

export default App;
