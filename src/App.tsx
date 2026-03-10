import { useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/sections/HeroSection'
import GlobalReachSection from '@/sections/GlobalReachSection'
import IndustrySection from '@/sections/IndustrySection'
import ShowcaseSection from '@/sections/ShowcaseSection'
import SocialProofSection from '@/sections/SocialProofSection'
import SplineSection from '@/sections/SplineSection'
import FAQSection from '@/sections/FAQSection'
import CTASection from '@/sections/CTASection'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal'

function App() {
    const [privacyOpen, setPrivacyOpen] = useState(false)

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
                <CTASection />
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
                        <a
                            href="https://wa.me/917827599839?text=Hi%20Rayline%20Studio!%20I%20am%20interested%20in%20getting%20a%20website%20built.%20Can%20we%20discuss%20my%20project?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </footer>

            {/* Fixed floating WhatsApp button — always on top */}
            <WhatsAppFAB />

            {/* Privacy policy modal — rendered at root to avoid z-index issues */}
            <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
        </div>
    )
}

export default App
