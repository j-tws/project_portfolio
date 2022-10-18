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
        <nav className="relative container mx-auto p-6">
          <div className="flex items-center justify-between">
            <div>
              Home Logo to put here
            </div>
            <div className="hidden space-x-12 md:flex">
              <Link className='hover:text-darkGrayishBlue'>About me</Link>
              <Link className='hover:text-darkGrayishBlue'>Projects</Link>
              <Link className='hover:text-darkGrayishBlue'>Tech Skills</Link>
              <Link className='hover:text-darkGrayishBlue'>Contact</Link>

            </div>
            
              <Link className='hidden md:block p-3 px-6 pt-2 text-white bg-veryDarkBlue rounded-lg hover:bg-brightRedLight'>Resume</Link>

          </div>
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
