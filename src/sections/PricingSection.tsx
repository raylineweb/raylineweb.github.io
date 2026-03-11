import { Pricing } from "@/components/ui/pricing"

interface PricingSectionProps {
    onGetQuote: () => void
}

const STARTER_FEATURES = [
    "1 Page Design (Landing Page)",
    "Standard Hosting & SSL Certificate",
    "Mobile-Responsive Design",
    "Basic On-Page SEO (meta tags, sitemap.xml, robots.txt)",
    "Google Analytics & Search Console Setup",
    "Contact Form Integration (EmailJS / Formspree)",
    "Favicon, OG Tags & Social Preview Cards",
    "1 Month Post-Launch Bug Support",
    "Basic Email Support (48hr response time)",
]

const STARTER_EXCLUDED = [
    "No Revisions",
    "No Full Redesign",
    "No Custom Domain",
    "No AI Assistant",
    "No 3D Integration",
    "No CMS / Blog Setup",
    "No Priority Support",
]

const SCALING_FEATURES = [
    "Up to 5 Pages (Home, About, Services, Portfolio, Contact)",
    "Premium Hosting + Free Custom Domain (1 Year)",
    "Advanced SEO (Core Web Vitals, Schema Markup, Lighthouse 90+)",
    "CMS / Blog Integration (Sanity.io or Contentful — client-editable)",
    "Performance Optimization (lazy loading, image compression, code splitting)",
    "Email Automation Setup (Mailchimp / Brevo welcome sequences)",
    "Social Media Feed & Sharing Integration",
    "Cookie Consent Banner (GDPR-compliant)",
    "Basic Analytics Dashboard (via Google Looker Studio)",
    "Priority Support (24hr response time)",
    "2 Revisions / Month",
    "$2 Live Demo Preview Available Before Purchase",
    "Monthly Website Health Report",
]

const SCALING_EXCLUDED = [
    "No 3D Integration",
    "No Custom AI Assistant",
    "No Dedicated Server",
    "No Unlimited Revisions",
]

const ENTERPRISE_FEATURES = [
    "Unlimited Pages & Sections",
    "Dedicated Server Hosting (VPS — DigitalOcean / Hetzner)",
    "Full-Stack Web Application (React + Node.js / Supabase backend)",
    "Custom AI Assistant (RAG-powered chatbot — OpenAI / Gemini API)",
    "3D Integration (Three.js / React Three Fiber / Spline scenes)",
    "Advanced Animations & Microinteractions (GSAP, Framer Motion)",
    "E-Commerce Integration (Stripe or Razorpay payment gateway)",
    "Custom Admin / CMS Dashboard (role-based access)",
    "Third-Party API Integrations (CRMs, booking, maps, etc.)",
    "Advanced SEO Suite (programmatic SEO, structured data)",
    "24/7 Priority Support (direct Slack channel)",
    "Unlimited Revisions",
    "Full Redesign Guarantee (once per contract year)",
    "Monthly 1:1 Strategy & Performance Call",
    "Uptime Monitoring & Security Patching (automated alerts)",
    "PWA Support — installable on mobile",
]

export default function PricingSection({ onGetQuote }: PricingSectionProps) {
    const plans = [
        {
            name: "Starter",
            price: 89,
            yearlyPrice: 76,
            yearlyBilled: "$912/year",
            period: "month",
            features: STARTER_FEATURES,
            excludedFeatures: STARTER_EXCLUDED,
            description: "Super affordable entry point for simple landing pages.",
            buttonText: "Get a Quote",
            isPopular: false,
            savingsLabel: "Save 15%",
            onGetQuote,
        },
        {
            name: "Scaling",
            price: 299,
            yearlyPrice: 209,
            yearlyBilled: "$2,508/year",
            period: "month",
            features: SCALING_FEATURES,
            excludedFeatures: SCALING_EXCLUDED,
            description: "For growing businesses that need a powerful digital presence.",
            buttonText: "Get a Quote",
            isPopular: true,
            savingsLabel: "Save 30%",
            onGetQuote,
        },
        {
            name: "Enterprise",
            price: 699,
            yearlyPrice: 489,
            yearlyBilled: "$5,868/year",
            period: "month",
            features: ENTERPRISE_FEATURES,
            excludedFeatures: [],
            description: "Full-scale custom applications with immersive elements.",
            buttonText: "Get a Quote",
            isPopular: false,
            savingsLabel: "Save 30%",
            onGetQuote,
        },
    ]

    return (
        <section
            id="pricing"
            className="relative bg-[#060608] overflow-hidden py-6"
        >
            {/* Top separator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Subtle background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-violet-700/5 blur-[120px]" />
            </div>

            <Pricing
                plans={plans}
                title="Transparent, Value-Driven Pricing"
                description={
                    "No hidden fees. No vague quotes.\nPick your tier and we'll build something extraordinary."
                }
            />

            {/* Legal disclaimer */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                <div className="flex items-start gap-3 bg-amber-400/5 border border-amber-400/20 rounded-xl px-5 py-4 text-sm text-amber-300/80 leading-relaxed">
                    <span className="text-amber-400 text-base mt-0.5 flex-shrink-0">⚠</span>
                    <p>
                        <span className="font-semibold text-amber-300">Payment Terms:</span>{" "}
                        A <span className="font-bold text-amber-200">50% upfront payment</span> is
                        required to initiate the building process for all plans. The remaining
                        balance is due upon delivery before the final handoff.
                    </p>
                </div>
            </div>
        </section>
    )
}
