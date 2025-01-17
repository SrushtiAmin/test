
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Values from './Components/Values/Values'


function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <Values/>
    </div>
  );
}

export default App;
