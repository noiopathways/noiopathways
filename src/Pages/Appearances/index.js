import Navigation from '../../Components/Navigation'
import Hero from '../../Components/Hero'
import Footer from '../../Components/Footer'

import './style.css'
import { PortfolioSpeaking } from '../../Components/Portfolio'
import { ContactCTA, ContactSocialIcons } from '../../Components/Contact'

function AppearancesPage() {
    return (
        <div className="landingPage">
            <Navigation />
            <Hero />
            <div style={{ marginTop: 20 }} className={'text-center'}><h1>Speaking Engagements and Appearances</h1>
                {/*  TODO: longer description here */}
                text here
                <ContactCTA /></div>
            <PortfolioSpeaking />
            <ContactSocialIcons />
            <Footer />
        </div>
    )
}

export default AppearancesPage