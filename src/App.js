
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Values from './Components/Values/Values'
import Testimonials from './Components/Testimonials/Testimonials'
import Logo from './Components/Logo/Logo'
import CaseStudies from './Components/CaseStudies/CaseStudies'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <Values/>
      <Testimonials/>
      <Logo/>
      <CaseStudies/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
