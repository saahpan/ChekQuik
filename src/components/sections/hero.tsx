'use client'
import Image from 'next/image'
import { Link as Linkscroll } from 'react-scroll';
import SlideUp from "@/utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3><i className="ri-shield-check-line" />Built for platforms. Trusted by operators.</h3>
                            <h2>Background Checks That Move as Fast as Your Platform Does.</h2>
                            <p>Chekquik is the background check API built for marketplaces and platforms. Integrate in minutes, get results in minutes, and onboard workers without the wait.</p>
                            <div className="hero-btns">
                                <Linkscroll smooth={true} to="pricing" className="theme-btn">See Pricing</Linkscroll>
                                <Linkscroll smooth={true} to="book" className="theme-btn differenct-color" style={{color: '#000', background: '#fff', border: '2px solid #000'}}>Get a free demo</Linkscroll>
                            </div>
                            <div className="dot-shape2">
                                <Image src="/chekquik-logo.png" alt="CheckQuik" width={380} height={102} style={{width: '380px', height: 'auto', opacity: 0.95}} unoptimized />
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero