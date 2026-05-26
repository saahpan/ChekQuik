type DataType = {
    id: number,
    title: string,
    description: string,
    price: number | string,
    features: {
        id: number
        feature: string,
        available: boolean
    }[]
}[]

export const priceData: DataType = [
    {
        id: 1,
        title: "Starter",
        description: "Perfect for small platforms just getting started with background checks.",
        price: "99",
        features: [
            {
                id: 1,
                feature: "Up to 50 checks/month",
                available: true
            },
            {
                id: 2,
                feature: "Criminal background checks",
                available: true
            },
            {
                id: 3,
                feature: "Identity verification",
                available: true
            },
            {
                id: 4,
                feature: "REST API access",
                available: true
            },
            {
                id: 5,
                feature: "Email support",
                available: true
            },
            {
                id: 6,
                feature: "White-label branding",
                available: false
            },
        ]
    },
    {
        id: 2,
        title: "Platform",
        description: "For growing platforms that need volume, speed, and custom workflows.",
        price: '399',
        features: [
            {
                id: 1,
                feature: "Up to 500 checks/month",
                available: true
            },
            {
                id: 2,
                feature: "All check types included",
                available: true
            },
            {
                id: 3,
                feature: "Custom adjudication rules",
                available: true
            },
            {
                id: 4,
                feature: "Webhooks & real-time updates",
                available: true
            },
            {
                id: 5,
                feature: "White-label branding",
                available: true
            },
            {
                id: 6,
                feature: "Dedicated Slack support",
                available: true
            },
        ]
    },
]
