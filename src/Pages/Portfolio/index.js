import Navigation from '../../Components/Navigation'
import Hero from '../../Components/Hero'
import About from '../../Components/About'
import Approach from '../../Components/Approach'
import Quotes from '../../Components/Quotes'
import Services from '../../Components/Services'
import Team from '../../Components/Team'
import Contact, { ContactSocialIcons } from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'
import { PortfolioProjects, PortfolioSpeaking } from '../../Components/Portfolio'

function PortfolioPage() {
    return (
        <div className="landingPage">
            <Navigation />
            <Hero />
            <PortfolioProjects />
            <ContactSocialIcons />
            <Footer />
        </div>
    )
}

export default PortfolioPage