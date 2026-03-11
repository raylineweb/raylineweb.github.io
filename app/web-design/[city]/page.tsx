import type { Metadata } from "next"
import Link from "next/link"
import { cities } from "@/data/cities"
import { ArrowRight, Check, Star } from "lucide-react"

interface Props {
    params: Promise<{ city: string }>
}

export async function generateStaticParams() {
    return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city: citySlug } = await params
    const city = cities.find((c) => c.slug === citySlug)

    if (!city) {
        return { title: "Web Design | Rayline Studio" }
    }

    const location = city.state ? `${city.name}, ${city.state}` : `${city.name}, ${city.country}`

    return {
        title: `Web Design in ${city.name} | Rayline Studio`,
        description: `Premium web design agency serving ${location}. Custom websites, 3D experiences, SEO optimisation, and full-stack development. Get a free quote today — response within 24 hours.`,
        keywords: [
            `web design ${city.name}`,
            `web designer ${city.name}`,
            `website design ${city.name}`,
            `web development ${city.name}`,
            `custom website ${city.name}`,
        ],
        openGraph: {
            title: `Web Design in ${city.name} | Rayline Studio`,
            description: `Premium web design services in ${location}. Custom builds, 3D integrations, and full-stack apps.`,
            url: `https://raylinestudio.com/web-design/${city.slug}`,
        },
        alternates: {
            canonical: `https://raylinestudio.com/web-design/${city.slug}`,
        },
    }
}

const INCLUDED_FEATURES = [
    "Mobile-Responsive Design",
    "Advanced SEO Optimisation",
    "Google Analytics & Search Console Setup",
    "Performance Optimisation (Lighthouse 90+)",
    "SSL Certificate & Secure Hosting",
    "Custom Animations & Microinteractions",
    "Post-Launch Bug Support",
]

export default async function CityPage({ params }: Props) {
    const { city: citySlug } = await params
    const city = cities.find((c) => c.slug === citySlug)

    if (!city) return null

    const location = city.state ? `${city.name}, ${city.state}` : `${city.name}, ${city.country}`

    // LocalBusiness JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Rayline Studio",
        description: `Premium web design and development agency serving ${location}.`,
        url: `https://raylinestudio.com/web-design/${city.slug}`,
        areaServed: {
            "@type": "City",
            name: city.name,
            containedInPlace: {
                "@type": "Country",
                name: city.country,
            },
        },
        contactPoint: {
            "@type": "ContactPoint",
            email: "raylinewebstudio@gmail.com",
            contactType: "customer service",
            availableLanguage: "English",
        },
        offers: [
            { "@type": "Offer", name: "Starter Web Design", price: "89", priceCurrency: "USD" },
            { "@type": "Offer", name: "Scaling Web Design", price: "299", priceCurrency: "USD" },
            { "@type": "Offer", name: "Enterprise Web Application", price: "699", priceCurrency: "USD" },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-[#060608] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>

                {/* Nav */}
                <nav className="border-b border-white/5 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
                    <Link href="/" className="text-white font-black text-lg tracking-tight">
                        Rayline<span className="text-violet-400">.</span>
                    </Link>
                    <Link
                        href="/#pricing"
                        className="text-sm font-semibold px-4 py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-500 transition-colors"
                    >
                        Get a Quote
                    </Link>
                </nav>

                {/* Hero */}
                <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
                    {/* Breadcrumb */}
                    <p className="text-white/40 text-sm mb-6">
                        <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
                        {" / "}
                        <span>Web Design in {city.name}</span>
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-6">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
                        </span>
                        Now Accepting Projects in {city.name}
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Premium Web Design<br />
                        in <span className="text-violet-400">{city.name}</span>
                    </h1>

                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        Rayline Studio builds high-performance, visually stunning websites for businesses in {location}.
                        From landing pages to full-stack applications with 3D integrations — we deliver results that convert.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/#pricing"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-500 transition-all duration-200 shadow-xl shadow-violet-500/20 active:scale-95"
                        >
                            View Pricing Plans
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/#showcase"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white/80 font-semibold hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                            See Our Work
                        </Link>
                    </div>
                </section>

                {/* Why Rayline for this city */}
                <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black mb-4">
                                Why Choose Rayline Studio for Your {city.name} Business?
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-6">
                                Businesses in {location} need more than a template — they need a digital presence that
                                stands out in a competitive market. We combine cutting-edge technology with pixel-perfect
                                design to help you win online.
                            </p>
                            <ul className="space-y-3">
                                {INCLUDED_FEATURES.map((f) => (
                                    <li key={f} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
                                            <Check className="h-3 w-3 text-violet-400" />
                                        </span>
                                        <span className="text-white/75 text-sm">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pricing snapshot */}
                        <div className="space-y-4">
                            {[
                                { name: "Starter", price: "$89", desc: "Landing page + SEO basics", popular: false },
                                { name: "Scaling", price: "$299", desc: "Up to 5 pages + CMS + Analytics", popular: true },
                                { name: "Enterprise", price: "$699", desc: "Full-stack app + AI + 3D", popular: false },
                            ].map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`rounded-2xl border p-5 flex items-center gap-4 ${plan.popular
                                        ? "border-violet-500/60 bg-violet-950/40"
                                        : "border-white/10 bg-white/3"
                                        }`}
                                >
                                    {plan.popular && (
                                        <Star className="h-4 w-4 text-violet-400 fill-violet-400 flex-shrink-0" />
                                    )}
                                    <div className="flex-1">
                                        <p className="font-bold text-white">{plan.name}</p>
                                        <p className="text-white/50 text-sm">{plan.desc}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-black text-white">{plan.price}<span className="text-white/40 text-sm font-normal">/mo</span></p>
                                    </div>
                                </div>
                            ))}

                            <Link
                                href="/#pricing"
                                className="block w-full text-center py-4 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-500 transition-colors mt-2"
                            >
                                See Full Pricing →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto px-6 py-16 border-t border-white/5">
                    <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">
                        Frequently Asked Questions — Web Design in {city.name}
                    </h2>

                    {[
                        {
                            q: `How much does a website cost in ${city.name}?`,
                            a: `Our pricing starts at $89/month for a single-page landing site and goes up to $699/month for enterprise full-stack applications. All plans include hosting, SSL, and ongoing support.`,
                        },
                        {
                            q: `Do you work with businesses based in ${city.name} remotely?`,
                            a: `Absolutely. We work with clients worldwide entirely online. Communication happens via email, Slack, and video calls — location is no barrier.`,
                        },
                        {
                            q: `How long does it take to build a website for a ${city.name} business?`,
                            a: `Landing pages typically take 1–2 weeks. Multi-page sites take 3–5 weeks. Enterprise applications are scoped individually. We'll give you a precise timeline after your initial consultation.`,
                        },
                        {
                            q: `Will my website rank on Google for ${city.name} searches?`,
                            a: `Yes. Every site we build includes on-page SEO, schema markup, sitemap.xml, proper meta tags, and Google Search Console setup as standard.`,
                        },
                    ].map(({ q, a }) => (
                        <div key={q} className="border-b border-white/8 py-5">
                            <h3 className="font-semibold text-white mb-2">{q}</h3>
                            <p className="text-white/55 text-sm leading-relaxed">{a}</p>
                        </div>
                    ))}
                </section>

                {/* Footer */}
                <footer className="border-t border-white/5 py-8">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
                        <span>© {new Date().getFullYear()} Rayline Studio. All rights reserved.</span>
                        <div className="flex items-center gap-6">
                            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
                            <Link href="/#pricing" className="hover:text-white/60 transition-colors">Pricing</Link>
                            <Link href="/#showcase" className="hover:text-white/60 transition-colors">Portfolio</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
