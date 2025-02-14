import './App.css';
import { AboutUs } from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

import { Experiance } from './Components/Experiance';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Skills } from './Components/Skills';

function App() {
  return (
    <div className='app-container'>
      <Header></Header>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Skills></Skills>
      <Experiance></Experiance>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
