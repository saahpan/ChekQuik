type DataType = {
    id: number,
    img: string,
    name: string,
    review: string,
    position: string
}[]

export const testimonilasData: DataType = [
    {
        id: 1,
        img: "/images/testimonials/author1.jpg",
        name: "Marcus Webb",
        position: "CTO, TruckHire",
        review: `"We went from a 3-day onboarding process to same-day. Chekquik's API is dead simple and results come back fast. Our driver activation rate went up 40% in the first month."`
    },
    {
        id: 2,
        img: "/images/testimonials/author2.jpg",
        name: "Priya Nair",
        position: "Head of Operations, TaskBridge",
        review: `"We tried two other background check providers before Chekquik. The difference is night and day — real-time webhooks, clean results, and actually responsive support."`
    },
    {
        id: 3,
        img: "/images/testimonials/author1.jpg",
        name: "Jason Okafor",
        position: "Founder, HireLocal",
        review: `"Chekquik made FCRA compliance something we don't have to think about. The adverse action workflows are built in. It just works."`
    },
    {
        id: 4,
        img: "/images/testimonials/author2.jpg",
        name: "Sarah Chen",
        position: "VP Product, Staffify",
        review: `"White-labeling was critical for us — our candidates go through the entire check without ever leaving our app. Setup took less than a day. Genuinely impressive."`
    },
]
