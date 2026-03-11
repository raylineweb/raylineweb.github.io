import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { ShaderAnimation } from '@/components/ui/shader-animation'
import { ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

interface CTASectionProps {
    onGetQuote: (plan: { name: string; price: string }) => void
}

export default function CTASection({ onGetQuote }: CTASectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="contact"
            ref={ref}
            className="relative bg-[#060608] overflow-hidden"
        >
            {/* Top border line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

            {/* Shader container */}
            <div className="relative h-[620px] w-full overflow-hidden">
                <ShaderAnimation className="absolute inset-0 w-full h-full opacity-70" />

                {/* Dark overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />

                {/* CTA Content */}
                <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-center max-w-3xl mx-auto space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium tracking-wider uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                            </span>
                            Now Accepting Projects
                        </div>

                        {/* Main headline */}
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                            Ready to Build Something{' '}
                            <span className="italic font-black">Extraordinary?</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                            Let's craft a digital experience that sets your brand apart.
                            No templates. No compromises. Just premium results.
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                            {/* Primary CTA — Get a Quote */}
                            <button
                                onClick={() => onGetQuote({ name: "Scaling", price: "299" })}
                                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm bg-violet-600 text-white hover:bg-violet-500 active:scale-95 transition-all duration-200 shadow-xl shadow-violet-500/25"
                            >
                                Get a Quote
                                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </button>

                            <a
                                href="#showcase"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border border-white/25 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 active:scale-95 transition-all duration-200 backdrop-blur-sm"
                            >
                                View Our Work
                            </a>
                        </div>

                        {/* Trust indicator */}
                        <p className="text-white/40 text-xs tracking-wide">
                            ✦ 120+ projects delivered globally &nbsp;·&nbsp; Response within 24 hours
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
