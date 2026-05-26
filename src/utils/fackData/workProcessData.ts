type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Integrate",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-code-s-slash-line",
        description: "Add Chekquik to your platform in minutes with our REST API or no-code widgets. No infrastructure to manage.",
    },
    {
        id: 2,
        title: "Order",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-shield-check-line",
        description: "Trigger background checks on your candidates or workers with a single API call or dashboard click.",
    },
    {
        id: 3,
        title: "Decide",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-checkbox-circle-line",
        description: "Get clear, adjudicated results delivered in real time. Set custom rules to auto-approve or flag candidates automatically.",
    },
]
