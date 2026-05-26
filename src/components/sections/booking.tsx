import Image from "next/image"
import SlideUp from "@/utils/animations/slideUp"

const Booking = () => {
    return (
        <section id="book" className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="call-to-action-part text-center">
                            <h2>See if Chekquik is right for your platform. (It probably is.)</h2>
                            <p>Get a guided walkthrough of the API, see real check results, and find out how fast you can go live. No commitment required.</p>
                            <div className="hero-btns">
                                <a href="mailto:saahilpandit2005@gmail.com" className="theme-btn">Get a free demo</a>
                            </div>
                            <a href="#">
                                <Image width={200} height={54} src="/chekquik-logo.png" alt="CheckQuik" title="CheckQuik" style={{ height: "54px", width: "auto", marginTop: "1.5rem" }} />
                            </a>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Booking