type DataType = {
    id: number,
    title: string,
    icon: string,
    description: string
}[]

export const featuresData: DataType = [
    {
        id: 1,
        title: "Lightning Fast",
        icon: "ri-flashlight-line",
        description: "Most checks complete in under 5 minutes. No more waiting days for results."
    },
    {
        id: 2,
        title: "API First",
        icon: "ri-code-s-slash-line",
        description: "Built for developers. RESTful API, webhooks, and SDKs for Node, Python, and more."
    },
    {
        id: 3,
        title: "FCRA Compliant",
        icon: "ri-shield-check-line",
        description: "Fully compliant background checks with built-in adverse action workflows."
    },
    {
        id: 4,
        title: "No Setup Fees",
        icon: "ri-money-dollar-circle-line",
        description: "Pay per check or choose a volume plan. No contracts or minimum commitments."
    },
    {
        id: 5,
        title: "White-Label Ready",
        icon: "ri-palette-line",
        description: "Embed Chekquik under your own brand — your candidates never leave your platform."
    },
    {
        id: 6,
        title: "Real-Time Webhooks",
        icon: "ri-notification-4-line",
        description: "Get instant updates when check status changes. Build automated onboarding flows."
    }
]
