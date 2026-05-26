import Image from "next/image"
import SlideUp from "@/utils/animations/slideUp"

const About = () => {
    return (
        <section className="funder-says-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="founder-say-part text-center">
                            <h3>Chekquik cut our candidate onboarding from three days to thirty minutes –<span>that's not a rounding error, that's a completely different business.</span>Every platform that moves workers should be running on this.</h3>
                            <div className="founder-name-part">
                                <Image width={80} height={80} src="/images/about/founder.png" alt="founder" title="founder" unoptimized />
                                <h2>Marcus Webb</h2>
                                <p>CTO, TruckHire</p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About