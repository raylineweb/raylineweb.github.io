import { useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/sections/HeroSection'
import GlobalReachSection from '@/sections/GlobalReachSection'
import IndustrySection from '@/sections/IndustrySection'
import ShowcaseSection from '@/sections/ShowcaseSection'
import SocialProofSection from '@/sections/SocialProofSection'
import SplineSection from '@/sections/SplineSection'
import FAQSection from '@/sections/FAQSection'
import PricingSection from '@/sections/PricingSection'
import CTASection from '@/sections/CTASection'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal'
import QuotationQuestionnaire from '@/sections/QuotationQuestionnaire'

function App() {
    const [privacyOpen, setPrivacyOpen] = useState(false)
    const [showQuote, setShowQuote] = useState(false)

    if (showQuote) {
        return (
            <QuotationQuestionnaire onBack={() => setShowQuote(false)} />
        )
    }

    return (
        <div
            className="min-h-screen bg-[#060608] text-foreground antialiased"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            <Navbar />

            <main>
                <HeroSection />
                <GlobalReachSection />
                <IndustrySection />
                <ShowcaseSection />
                <SocialProofSection />
                <SplineSection />
                <FAQSection />
                <PricingSection onGetQuote={() => setShowQuote(true)} />
                <CTASection onGetQuote={() => setShowQuote(true)} />
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-8 bg-[#060608]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <span>© {new Date().getFullYear()} Rayline Studio. All rights reserved.</span>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setPrivacyOpen(true)}
                            className="hover:text-foreground transition-colors underline-offset-2 hover:underline"
                        >
                            Privacy Policy
                        </button>
                        <a href="#hero" className="hover:text-foreground transition-colors">
                            Back to top ↑
                        </a>
                        <button
                            onClick={() => setShowQuote(true)}
                            className="hover:text-foreground transition-colors underline-offset-2 hover:underline"
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>
            </footer>

            {/* Privacy policy modal — rendered at root to avoid z-index issues */}
            <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
        </div>
    )
}

export default App
