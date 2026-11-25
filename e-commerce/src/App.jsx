// Import React hooks
import { useState, useEffect, useRef } from 'react'

// Import styles and assets
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import page components
import Nav from "./Components/nav";
import Logos from "./Components/logos";
import Collection from "./Components/collection";
import Product from "./Components/product";
import Display from "./Components/display"
import Testimonial from "./Components/testimonial"
import Footer from "./Components/footer"

// Import AOS animation library
import AOS from "aos";
import 'aos/dist/aos.css';

// Import icons
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniXMark } from "react-icons/hi2";

function App() {
  // Control mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Create references for page sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const arrivalRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to a section when a nav button is clicked
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      {/* Main navigation bar */}
      <div className="nav-container">
        <div className='mineContain'>
          <div>
            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="icon"><i>DressUpo</i></p>
          </div>
          <div>
            {/* Mobile menu button */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Show icon based on menu state */}
              {menuOpen ? <HiMiniXMark /> : <GiHamburgerMenu />}
            </button>

            {/* Navigation links */}
            <div className={`nav-buttons ${menuOpen ? 'active' : ''}`}>
              <button onClick={() => scrollToSection(homeRef)}>Home</button>
              <button onClick={() => scrollToSection(arrivalRef)}>New Arrivals</button>
              <button onClick={() => scrollToSection(aboutRef)}>Product</button>
              <button onClick={() => scrollToSection(testimonialRef)}>Testimonial</button>
            </div>
          </div>
        </div>

        {/* User and cart icons */}
        <div className="nav-icons">
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="icon1"><FaRegUser /></button>
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="icon1"><MdOutlineShoppingCart /></button>
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="icon2">Sign In</button>
        </div>
      </div>

      {/* Website sections */}
      <div ref={homeRef}><Nav /></div>
      <Logos />
      <div ref={arrivalRef}><Collection /></div>
      <div ref={aboutRef}><Product /></div>
      <Display />
      <div ref={testimonialRef}><Testimonial /></div>
      <Footer />
    </>
  )
}

export default App