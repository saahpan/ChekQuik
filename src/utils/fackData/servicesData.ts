type DataType = {
    id: number,
    title: string,
    img: string,
    description: string
}[]

export const servicesData: DataType = [
    {
        id: 1,
        title: "Criminal Background Check",
        img: "/images/services/service1.jpg",
        description: "Comprehensive criminal record searches across federal, state, and county databases — results in minutes, not days."
    },
    {
        id: 2,
        title: "Identity Verification",
        img: "/images/services/service2.jpg",
        description: "Confirm who your users are with real-time ID verification, SSN validation, and watchlist screening."
    },
    {
        id: 3,
        title: "Motor Vehicle Records",
        img: "/images/services/service3.jpg",
        description: "Driving history, license status, and violations — essential for platforms with drivers or delivery workers."
    },
]
