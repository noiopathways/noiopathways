import Navigation from '../../Components/Navigation'
import Hero from '../../Components/Hero'
import About from '../../Components/About'
import Values from '../../Components/Values'
import Services from '../../Components/Services'
import Founder from '../../Components/Founder'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function Landing() {
    return (
        <>
            <Navigation />
            <Hero />
            <About />
            <Values />
            <Services />
            <Founder />
            <Contact />
            <Footer />
        </>
    )
}

export default Landing