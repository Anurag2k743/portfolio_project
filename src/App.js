import './App.css';
import Header from './components/Header';
import Creative from './sections/Creative';
import Exerience from './sections/Exerience';
import Hero from './sections/Hero';
import Works from './sections/Works';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Creative/>
      <Exerience/>
      <Works/>
    </div>
  );
}

export default App;
