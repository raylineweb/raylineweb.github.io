import { useRef, useState, useEffect } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

const capabilities = [
    '3D Interactive Experiences',
    'Real-time WebGL Animations',
    'Micro-interaction Design',
    'Scroll-driven Storytelling',
]

// Mobile fallback — a compelling static visual instead of Spline (saves ~4MB on mobile)
function MobileFallback() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-[#0d0d1a] to-[#060608] relative overflow-hidden">
            {/* Decorative animated rings */}
            <div className="absolute w-64 h-64 rounded-full border border-violet-500/20 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute w-48 h-48 rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
            <div className="absolute w-32 h-32 rounded-full border border-white/10 animate-ping" style={{ animationDuration: '1.5s', animationDelay: '1s' }} />

            {/* Center icon */}
            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-violet-500/30">
                    <Sparkles className="w-10 h-10 text-white" />
                </div>
                <p className="text-white/40 text-xs tracking-wider uppercase">Immersive 3D on Desktop</p>
            </div>
        </div>
    )
}

export default function SplineSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check, { passive: true })
        return () => window.removeEventListener('resize', check)
    }, [])

    return (
        <section
            id="immersive"
            ref={ref}
            className="relative bg-[#060608] py-16 md:py-24 overflow-hidden px-4 md:px-6"
        >
            {/* Section top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex justify-center mb-8"
                >
                    <AnimatedGradientText>
                        <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                        <span
                            className={cn(
                                'inline animate-gradient',
                                'bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40]',
                                'bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent',
                            )}
                        >
                            Experience the Next Dimension
                        </span>
                    </AnimatedGradientText>
                </motion.div>

                {/* Card — auto height on mobile, fixed on desktop */}
                <Card className="w-full bg-black/[0.96] border-white/10 relative overflow-hidden rounded-2xl">
                    <Spotlight size={400} />

                    <div className="flex flex-col md:flex-row min-h-[500px] md:h-[600px]">
                        {/* Left — Text content */}
                        <motion.div
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                            className="flex-1 p-7 md:p-12 relative z-10 flex flex-col justify-center gap-5"
                        >
                            <h2 className="text-3xl md:text-5xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                Rayline Builds<br />
                                Immersive Modern<br />
                                Web Experiences
                            </h2>

                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                                We craft living, breathing digital environments — Interactive 3D,
                                physics-based animations, and immersive storytelling that converts
                                visitors into clients.
                            </p>

                            <ul className="space-y-2">
                                {capabilities.map((item) => (
                                    <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-xl text-sm font-semibold bg-white text-black hover:bg-white/90 active:scale-95 transition-all duration-200"
                            >
                                Let's Build Yours →
                            </a>
                        </motion.div>

                        {/* Right — 3D or mobile fallback */}
                        <motion.div
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                            className="flex-1 relative h-[280px] md:h-auto"
                        >
                            {isMobile ? (
                                <MobileFallback />
                            ) : (
                                <SplineScene scene={SPLINE_SCENE} className="w-full h-full" />
                            )}
                        </motion.div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
