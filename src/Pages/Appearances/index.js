import Navigation from '../../Components/Navigation'
import Hero from '../../Components/Hero'
import Footer from '../../Components/Footer'

import './style.css'
import { PortfolioSpeaking } from '../../Components/Portfolio'

function AppearancesPage() {
    return (
        <div className="landingPage">
            <Navigation />
            <Hero />
            <div style={{ marginTop: 20 }} className={'text-center'}><h1>description</h1>
                text here with cta link</div>
            <PortfolioSpeaking />
            {/*  TODO: longer description here with cta */}
            <Footer />
        </div>
    )
}

export default AppearancesPage