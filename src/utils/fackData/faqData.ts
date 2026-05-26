type DataType = {
    id: string,
    question: string,
    ans: string,
}[]

export const faqData: DataType = [
    {
        id: "one",
        question: "How fast are background check results?",
        ans: "Most criminal background checks and identity verifications complete in under 5 minutes. Some county-level searches may take up to 24 hours depending on court availability.",
    },
    {
        id: "two",
        question: "Is Chekquik FCRA compliant?",
        ans: "Yes. Chekquik is a Consumer Reporting Agency (CRA) and all checks are fully compliant with the Fair Credit Reporting Act (FCRA). We include built-in adverse action workflows so your platform stays compliant too."
    },
    {
        id: "three",
        question: "How does pricing work?",
        ans: "We offer monthly plans based on check volume (Starter and Platform), plus pay-as-you-go pricing for lower volumes. There are no setup fees or long-term contracts."
    },
    {
        id: "four",
        question: "Can I white-label Chekquik under my own brand?",
        ans: "Yes. On the Platform plan and above, you can fully white-label the candidate-facing experience so your users never see the Chekquik name."
    },
    {
        id: "five",
        question: "What types of background checks do you offer?",
        ans: "We offer criminal background checks (federal, state, county), identity verification, SSN validation, sex offender registry, global watchlist screening, and motor vehicle records (MVR)."
    },
    {
        id: "six",
        question: "How do I integrate Chekquik into my platform?",
        ans: "We provide a REST API, webhooks, and client SDKs for Node.js and Python. Most teams complete their integration in under a day. We also offer a no-code dashboard for manual orders."
    },
]
