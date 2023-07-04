import { About } from './components/About';
import { LandingPage } from './components/LandingPage';
import Projects from './components/Projects';
import Skills  from './components/Skills';
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Skills /> 
      <Projects />
    </div>
  );
}

export default App;
