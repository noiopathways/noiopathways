import Navigation from '../../Components/Navigation'
import Hero from '../../Components/Hero'
import About from '../../Components/About'
import Values from '../../Components/Values'
import Services from '../../Components/Services'
import Team from '../../Components/Team'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function Landing() {
    return (
        <div className="landingPage">
            <Navigation />
            <Hero />
            <About />
            <Values />
            <Services />
            <Team />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing