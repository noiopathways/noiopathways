import Navigation from '../../Components/Navigation'
import Hero from '../../Components/Hero'
import About from '../../Components/About'
import Approach from '../../Components/Approach'
import Quotes from '../../Components/Quotes'
import Services from '../../Components/Services'
import Team, { Collaborators, PartnerOrgs } from '../../Components/Team'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function AboutPage() {
    return (
        <div className="landingPage">
            <Navigation />
            <Hero />
            <About />
            <Team />
            <Collaborators />
            <PartnerOrgs />
            <Contact />
            <Footer />
        </div>
    )
}

export default AboutPage