import './App.css';
import Hero from './Hero';
import About from './About';
import Course from './Course';
import Footer from './Footer';
import Courses from './courses';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Courses/>
      <Course/>
      <Footer/>
    </div>
  );
}

export default App;
