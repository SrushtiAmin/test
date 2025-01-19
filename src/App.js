
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Values from './Components/Values/Values'
import Testimonials from './Components/Testimonials/Testimonials'


function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <Values/>
      <Testimonials/>
    </div>
  );
}

export default App;
