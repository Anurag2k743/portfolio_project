import './App.css';
import ContactForm from './components/Contactform';
import Footer from './components/Footer';
import Header from './components/Header';
import ClientsSlider from './sections/ClientsSlider';
import CopyRight from './sections/CopyRight';
import Creative from './sections/Creative';
import Design from './sections/Design';
import Exerience from './sections/Exerience';
import Hero from './sections/Hero';
import Reach from './sections/Reach';
import Works from './sections/Works';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Creative/>
      <Exerience/>
      <Works/>
      <Design/>
      <ClientsSlider/>
      <Reach/>
      <Footer/>
      <CopyRight/>
      {/* <ContactForm/> */}
    </div>
  );
}

export default App;
