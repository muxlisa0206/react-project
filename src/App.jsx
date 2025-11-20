import "./App.css";
import Header from "./components/header/header";
// import Footer from "./components/footer/footer";

import Leadership from "./components/leadership/Leadership";
import PortfolioGrid from "./components/portfolio/Portfoliogrid";
import ServiceBox from "./components/service-box/service-box";
import Statika from "./components/statika/Statika";
import Testimonials from "./components/testimonials/Testimonials";
import Whyus from "./components/whyUs/Whyus";

function App(){
    return(
        <>
            <Header/>

            <main>
                <section id="#home" className="hero-section">
                    <div className="container hero-container">
                        <div className="hero-card-one">
                            <h1 className="hero-card-title">Transform Your Digital Presence</h1>
                            <h3 className="hero-card-desc">We create innovative digital solutions that drive growth and elevate your brand. From web development to digital marketing, we're your partners in digital transformation.</h3>
                            <div className="hero-card-btn">
                                <button className="btn-one">Get Started</button>
                                <button className="btn-two">Our Work</button>
                            </div>
                            <div className="hero-card_statika">
                                <Statika desc="Projects Completed" number="150"/>
                                <Statika desc="lient Satisfaction" number="95"/>
                                <Statika desc="Team Members" number="24"/>
                            </div>
                        </div>
                        <img className="hero-img" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/misc/misc-16.webp" alt="" />
                    </div>
                </section>

                <section id="#about">
                    <div className="container about-container">
                        <div className="about-card-one">
                            <p className="about-discover">
                                DISCOVER OUR STORY
                            </p>
                            <h1 className="about-card-title">Innovative Solutions for a Digital-First World</h1>
                            <h3 className="about-card-desc"> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h3>
                            <div className="correct-card">
                                <div className="correct">
                                </div>
                                <p className="correct-desc">Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                            <div className="correct-card">
                                <div className="correct">
                                </div>
                                <p className="correct-desc">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                            </div>
                            <div className="correct-card">
                                <div className="correct">
                                </div>
                                <p className="correct-desc">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                            <button className="about-card-btn">
                                Discover More
                            </button>
                        </div>
                        <div className="about-card-two">
                            <div className="about-img-card">
                                <img className="main-image" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/about/about-9.webp" alt="" />
                                <img className="about-second-img" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/about/about-square-8.webp" alt="" />
                            <div className="about-statistika-card">
                                <div className="about-statistika">
                                    <h5 className="about-statistika-title">20+</h5>
                                    <p className="about-statistika-desc">Years of Expertise</p>
                                </div>
                                <div className="about-statistika">
                                    <h5 className="about-statistika-title">500+</h5>
                                    <p className="about-statistika-desc">Happy Clients</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="#service">
                    <div className="container service-container">
                        <h1 className="service-title">Service</h1>
                        <p className="service-desc">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        <div className="service-boxes">
                            <ServiceBox images="</>" title="Brand Identity Design" desc="Donec vel sapien augue integer urna vel turpis cursus porta aliquam ligula eget ultricies."/>
                            <ServiceBox images="</>" title="UI/UX Design" desc="Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum tellus pellentesque eu."/>
                            <ServiceBox images="</>" title="Web Developer" desc="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."/>
                            <ServiceBox images="</>" title="Mobile App Design" desc="Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida."/>
                            <ServiceBox images="</>" title="Digital Marketing" desc="Sed porttitor lectus nibh donec sollicitudin molestie malesuada proin eget tortor risus."/>
                            <ServiceBox images="</>" title="SEO Optimization" desc="Curabitur arcu erat accumsan id imperdiet et porttitor at sem pellentesque habitant morbi."/>
                        </div>
                        <div className="service-box">
                            <h1 className="service-box-title">Ready to Transform Your Digital Presence?</h1>
                            <p className="service-box-desc">Let's discuss your project and create something amazing together</p>
                            <button className="service-btn">Get Started Today</button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container portfolio-container">
                        <h1 className="service-title">Portfolio</h1>
                        <p className="service-desc">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        <div className="portfolio-btns">
                            <button className="portfolio-btn first-btn">All projects</button>
                            <button className="portfolio-btn">Web Design</button>
                            <button className="portfolio-btn">Mobile Apps</button>
                            <button className="portfolio-btn">Branding</button>
                            <button className="portfolio-btn">UI/UX</button>
                        </div>
                        <div className="portfolio-boxes">
                            <PortfolioGrid images="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-7.webp" rate="☆ 4.8" branding="WEB-DESIGN" title="Digital Innovation Platform" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." link1="React" link2="Node.Js" link3="AWS"/>
                            <PortfolioGrid images="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-8.webp" rate="☆ 4.9" branding="MOBILE APP" title="Smart Productivity App" desc="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." link1="Flutter" link2="Firebase" link3="AI"/>
                            <PortfolioGrid images="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-9.webp" rate="☆ 5.0" branding="BRANDING" title="Modern Brand Identity" desc="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id." link1="Figma" link2="Brand" link3="Illyustrator"/>
                            <PortfolioGrid images="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-10.webp" rate="☆ 4.7" branding="UI/UX" title="SaaS Dashboard Design" desc="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." link1="Figma" link2="Prototyping" link3="UX"/>
                            <PortfolioGrid images="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-11.webp" rate="☆ 4.6" branding="E-COMMERCE" title="E-commerce Platform" desc="Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed." link1="Shopify" link2="React" link3="API"/>
                            <PortfolioGrid images="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-12.webp" rate="☆ 4.8" branding="FINTECH" title="Fintech Mobile Solution" desc="Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Sed porttitor lectus nibh." link1="Swift" link2="Kotlin" link3="Blockchain"/>
                        </div>
                        <div className="service-box">
                            <h1 className="service-box-title">Ready to start your next project?</h1>
                            <p className="service-box-desc">Let's work together to bring your digital vision to life</p>
                            <div className="portfolio-box-btn">
                                <button className="portfolio-mini-btn one">Start a Project</button>
                                <button className="portfolio-mini-btn two">View All Work</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container whyUs-container">
                        <h1 className="service-title">Why Us</h1>
                        <p className="service-desc">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        <div className="whyUs-cards">
                            <Whyus images="</>" title="Creative Excellence" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." number="95" litteledesc="% Client Satisifaction"/>
                            <Whyus images="</>" title="Proven Results" desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit." number="200" litteledesc="% ROI Increace"/>
                            <Whyus images="</>" title="Expert Team" desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis." number="50" litteledesc="+ Awards Won"/>
                        </div>
                        <div className="why-leading-container">
                            <img className="leading-image" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/illustration/illustration-14.webp" alt="" />
                            <div className="why-content">
                                <h1 className="leading-title">Why Leading Brands Choose Us</h1>
                                <p className="leading-desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                                <div className="strategy-ctr">
                                    <div className="correct-strategy"><div className="inner-strategy"></div></div>
                                    <div className="strategy-content">
                                        <h1 className="content-title">Strategic Thinking</h1>
                                        <p className="content-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>
                                <div className="strategy-ctr">
                                    <div className="correct-strategy"><div className="inner-strategy"></div></div>
                                    <div className="strategy-content">
                                        <h1 className="content-title">Data-Driven Approach</h1>
                                        <p className="content-desc">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                                    </div>
                                </div>
                                <div className="strategy-ctr">
                                    <div className="correct-strategy"><div className="inner-strategy"></div></div>
                                    <div className="strategy-content">
                                        <h1 className="content-title">24/7 Support</h1>
                                        <p className="content-desc">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                                    </div>
                                </div>
                                <div className="hero-card-btn">
                                    <button className="btn-one">Start Your Project</button>
                                    <button className="btn-two">View Portfolio</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container testimonials-container">
                        <h1 className="service-title">Testimonials</h1>
                        <p className="service-desc">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        <div className="tmt-cards">
                            <Testimonials image="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-m-9.webp" name="Alex Garcia" profession="VP of Marketing" desc="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."/>
                            <Testimonials image="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-m-13.webp" name="Robert Martinez" profession="Marketing Lead" desc="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."/>
                            <Testimonials image="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-f-14.webp" name="Jennifer Walsh" profession="UX ReSearcher" desc="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."/>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container team-container">
                        <h1 className="service-title">Team</h1>
                        <p className="service-desc">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        <div className="team-cards">
                            <div className="team-content">
                                <h1 className="team-content-title">Meet Our Exceptional Team</h1>
                                <p className="team-content-desc">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem unde maiores praesentium deleniti quia, aperiam magnam ullam explicabo. At?</p>
                                <div className="hero-card_statika">
                                    <Statika desc="TEAM MEMBERS" number="50+"/>
                                    <Statika desc="DEPARTMENTS" number="8"/>
                                    <Statika desc="COUNTRIES" number="15+"/>
                                </div>
                            </div>
                            <div className="team-images">
                                <img className="team-img img-one" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-m-9.webp" alt="" />
                                <img className="team-img img-two" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-m-13.webp" alt="" />
                                <img className="team-img img-three" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-f-14.webp" alt="" />
                                <img className="team-img img-four" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-f-5.webp" alt="" />
                            </div>
                        </div>
                        <h1 className="service-title">Leadership Team</h1>
                        <div class="leader-container">
                            <Leadership img="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-f-5.webp" name="Lisa Tompson" prof="Head of Operations"/>
                            <Leadership img="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-m-6.webp" name="Devid Kim" prof="UX Architect"/>
                            <Leadership img="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-m-4.webp" name="Marcus Jhonson" prof="Tech Lead"/>
                        </div>
                        <div className="lead-mission">
                            <div className="raketa"></div>
                            <h1 className="mission-title">Ready to Join Our Mission?</h1>
                            <p className="mission-desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                            <div className="portfolio-box-btn raketa-btn">
                                <button className="portfolio-mini-btn one">View open Roles</button>
                                <button className="portfolio-mini-btn two">Learn Our Culture</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container contact-container">
                    <h1 className="service-title contact-title">Contact</h1>
                    <p className="service-desc contact-desc">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        <div className="contact-form-container">
                            <form className="contact-form">
                                <h3 className="form-title">Let's star a conversation</h3>
                                <p className="form-desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.</p>
                                <div className="two-input">
                                    <input type="text" placeholder="Your Name"/>
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <input type="text" placeholder="What's this about"/>
                                <input className="desc-input" type="text" placeholder="Tell us about your project"/>
                                <button className="form-btn">Send massage</button>
                            </form>

                            <div className="contact-content">
                                <h1 className="contact-content-title">Ready to Transform Your Ideas?</h1>
                                <p className="contact-content-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <Footer/> */}
        </>
    )
}

export default App;