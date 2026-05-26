import Image from "next/image"
import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { servicesData } from "@/utils/fackData/servicesData"

const Services = () => {
    return (
        <section id="service" className="info-service-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>Background Checks</SectionTitle.Name>
                            <SectionTitle.Title>Every check your platform needs</SectionTitle.Title>
                            <SectionTitle.Description>From criminal records to identity — one API, every check type.</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesData.map(({ description, id, img, title }) =>
                            <Card key={id} description={description} id={id} img={img} title={title} />
                        )
                    }

                </div>
            </div>
        </section>

    )
}

export default Services

interface PropsType {
    id: number,
    title: string,
    description: string,
    img: string
}
const Card = ({ id, title, description, img }: PropsType) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id} className="info-item">
                <div className="info-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <Image width={800} height={600} src={img} style={{width:"100%", height:"auto"}} alt="img" unoptimized />
            </SlideUp>
        </div>
    )
}