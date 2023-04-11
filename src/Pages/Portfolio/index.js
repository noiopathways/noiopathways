import Navigation from '../../Components/Navigation'
import Hero from '../../Components/Hero'
import About from '../../Components/About'
import Approach from '../../Components/Approach'
import Quotes from '../../Components/Quotes'
import Services from '../../Components/Services'
import Team from '../../Components/Team'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function PortfolioPage() {
    return (
        <div className="landingPage">
            <Navigation />
            <Hero />

            <Contact />
            <Footer />
        </div>
    )
}

export default PortfolioPage