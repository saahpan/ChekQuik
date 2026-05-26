import Image from "next/image"
import SectionTitle from "@/components/ui/sectionTitle"
import { faqData } from "@/utils/fackData/faqData"

const Faqs = () => {
    return (
        <section id="faqs" className="any-questions-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>FAQs</SectionTitle.Name>
                            <SectionTitle.Title>Frequently Asked Questions</SectionTitle.Title>
                            <SectionTitle.Description>Everything you need to know about background checks for platforms.</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="book-call-intro text-center">
                            <Image width={140} height={140} src="/images/about/founder.png" alt="founder" title="founder" unoptimized />
                            <h2>Talk to us directly</h2>
                            <a href="mailto:saahilpandit2005@gmail.com" className="theme-btn">Book a demo<i className="ri-video-chat-line" /></a>
                            <p>Prefer to email? <a href="mailto:saahilpandit2005@gmail.com">hello@chekquik.com</a></p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {
                                faqData.map(({ ans, id, question }) => {
                                    return (
                                        <div key={id} className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={`${id}`}>{question}</button>
                                            </h2>
                                            <div id={`${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>{ans}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Faqs