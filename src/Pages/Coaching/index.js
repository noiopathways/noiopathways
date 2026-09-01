import Footer from '../../Components/Footer'
import Navigation from '../../Components/Navigation'

import './style.css'

function Coaching() {
    return (
        <div className="coachingPage">
            <Navigation />
            <main className="coachingContent">
                <header className="coachingHeader">
                    <h1>NOIO PATHWAYS</h1>
                    <h2>COACHING FOR VALUES-DRIVEN CHANGEMAKERS</h2>
                </header>

                <section className="coachingBody">
                    <p><strong>You're doing work that matters — and it's wearing you down.</strong></p>
                    <p>Maybe you're pushing for change inside an institution that resists it. Navigating a role where you carry responsibility without much formal authority. Or trying to build the influence to move an idea from the margins to the center — while staying whole in the process. Or, you have been working to get your community or organization heard by those with power and hitting roadblocks. Maybe you’re navigating change and just wondering what is next. If you're burned out, stuck, or feeling isolated in the work of making the world better, you don't have to figure out the next move alone.</p>

                    <h3>WHY WORK WITH A COACH?</h3>
                    <p>Coaching is great because it provides personalized guidance, deep accountability, and a clear path for growth. There are many benefits to coaching, but the biggest one is having a thought partner to help you think through tough decisions, illuminate your blind spots, vision and grow your awareness of the possibilities for your future, and build lasting confidence. 80% of people who receive coaching report increased self-confidence, and over 70% benefit from improved work performance, relationships, and more effective communication skills (source: ICF 2009).</p>

                    <h3>ABOUT YOUR COACH</h3>

                    <div className="aboutRow">
                        <div className="aboutText">
                            <p>I'm <strong>Jamie Stroble-Pauelua</strong>, the founder of Noio Pathways. Over 15+ years, I've pushed for social change inside institutions, local government, higher education, and the nonprofit sector — in roles with formal authority and in roles without it, and often as one of the only people of color on my team. I've also worked in leadership development, community organizing, and community building, which shapes how I coach: I help clients read power dynamics clearly, build genuine influence, lead from a place of authenticity, and move change forward without losing themselves along the way.</p>

                            <p>I have been trained by the Interaction Institute of Social Change in facilitative leadership for social change, the Management Center in Managing for BIPOC leaders, and have a certificate in Organizational Development from the University of Minnesota. I also bring a background in somatic practice and am currently training through the Embrace Change Coaching Certification program for women of color to obtain my ICF ACC credential. <a href="#">Learn more about me here.</a></p>
                        </div>

                        <aside className="coachPhoto">
                            <img src="/images/jamie.svg" alt="Jamie Stroble-Pauelua" />
                        </aside>
                    </div>

                    <h4>My coaching style is:</h4>
                    <ul>
                        <li>Inquisitive — I ask the questions that help you see your situation more clearly.</li>
                        <li>Holistic — your career, your values, and your wellbeing aren't separate conversations.</li>
                        <li>Visionary — we work from where you want to go, not just where you're stuck.</li>
                        <li>Collaborative — you're the expert on your life; I bring structure and challenge.</li>
                        <li>Strategic — especially around power, influence, and navigating institutions.</li>
                    </ul>

                    <h3>COACHING: WHAT IT IS (AND ISN'T)</h3>
                    <p><strong>Coaching is:</strong></p>
                    <ul>
                        <li>A partnership focused on your goals, values, and growth — you set the direction.</li>
                        <li>A space to think out loud with someone trained to ask powerful questions.</li>
                        <li>Action-oriented — sessions move toward clarity and next steps, not just insight.</li>
                        <li>Confidential, and grounded in your strengths and lived experience.</li>
                    </ul>

                    <p><strong>Coaching is not:</strong></p>
                    <ul>
                        <li>Therapy or mental health treatment — coaching is forward-focused, not clinical.</li>
                        <li>Consulting — I won't hand you a strategy deck; we build your strategy together.</li>
                        <li>Mentorship — I'm not advising from my own path, but drawing out yours.</li>
                        <li>A quick fix — meaningful change takes honest reflection and consistent effort.</li>
                    </ul>

                    <h3>EXAMPLES OF TOPICS I’VE WORKED WITH PREVIOUS CLIENTS ON</h3>
                    <ul>
                        <li>Navigating career change — transitions, promotions, reorganizations, and more.</li>
                        <li>Strategies to address burnout and work/life balance.</li>
                        <li>Working to build self-confidence and finding your voice at work, with colleagues and bosses.</li>
                        <li>Visioning future career direction and paths to get there.</li>
                        <li>How to stay values aligned in your work, and deciding when to leave for new opportunities.</li>
                    </ul>

                    <h3>COACHING PACKAGES</h3>
                    <p>Pricing is offered on a sliding scale, honoring that changemakers work across many different sectors and resource levels. If the listed range doesn't work for your circumstances, reach out — let's talk.</p>

                    <section className="packages">
                        <article className="package">
                            <h4>Pathway Session</h4>
                            <p><em>Single Session — 60 minutes — $175–450 (sliding scale)</em></p>
                            <p>A focused, one-time session for a specific decision, transition, or crossroads — no ongoing commitment required.</p>
                        </article>

                        <article className="package">
                            <h4>Pathways Accelerator</h4>
                            <p><em>Ongoing Engagement — 4 x 60 minute sessions over 2 months — $700–1800 (sliding scale)</em></p>
                            <p>Sustained, in-depth partnership for career transitions, leadership growth, or navigating major organizational change. Includes email support between sessions and a mid-point recalibration.</p>
                        </article>

                        <article className="package">
                            <h4>Pathways Partnership</h4>
                            <p><em>Ongoing Engagement — 2 x 60 minute sessions/month over 3 months (6 sessions total) — $1050–2700 (sliding scale)</em></p>
                            <p>Sustained, in-depth partnership for career transitions, leadership growth, or navigating major organizational change. Includes email support between sessions and a mid-point recalibration.</p>
                        </article>

                        <article className="package">
                            <h4>Pathways Journey</h4>
                            <p><em>Ongoing Longer-Term Engagement — 8 or 10 sessions over 4–6 months — $1400–3600 (8 sessions) or $1750–4500 (10 sessions) (sliding scale)</em></p>
                            <p>Sustained, in-depth partnership for career transitions, leadership growth, or navigating major organizational change. Includes email support between sessions and a mid-point recalibration.</p>
                        </article>
                    </section>

                    <hr className="section-divider" />

                    <div className="contentFooter">
                        <p className="cta"><strong>Ready to talk?</strong> Reach out to schedule a <a href="/#contact">free 20-minute discovery call</a>.</p>
                        <div className="content-logo-wrap">
                            <img src="/images/logo.png" alt="Noio Pathways" className="content-logo" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Coaching
