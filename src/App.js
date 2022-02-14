import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Protfolio from "./components/protfolio/Protfolio";
import Works from "./components/work/Works";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import './app.scss'
import {useState} from 'react';
import Menu from './components/menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Protfolio></Protfolio>
        <Works></Works>
        <Testimonial></Testimonial> 
        <Contact></Contact>
      </div>

    </div>
  );
}

export default App