import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
}

const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
}

const capabilities = [
    '3D Interactive Experiences',
    'Real-time WebGL Animations',
    'Micro-interaction Design',
    'Scroll-driven Storytelling',
]

export default function SplineSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="immersive"
            ref={ref}
            className="relative bg-[#060608] py-24 overflow-hidden px-6"
        >
            {/* Section top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeLeft}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex justify-center mb-10"
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

                {/* 3D Card */}
                <Card className="w-full h-[540px] md:h-[600px] bg-black/[0.96] border-white/10 relative overflow-hidden rounded-2xl">
                    {/* Spotlight follows mouse across the entire card */}
                    <Spotlight size={400} />

                    <div className="flex h-full flex-col md:flex-row">
                        {/* Left — Text */}
                        <motion.div
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={fadeLeft}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                            className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center gap-6"
                        >
                            <h2 className="text-4xl md:text-5xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                Rayline Builds
                                <br />
                                Immersive Modern
                                <br />
                                Web Experiences
                            </h2>

                            <p className="text-neutral-400 text-base leading-relaxed max-w-sm">
                                We don't just build websites — we craft living, breathing digital
                                environments. Interactive 3D, physics-based animations, and
                                immersive storytelling that converts visitors into clients.
                            </p>

                            {/* Capability list */}
                            <ul className="space-y-2.5">
                                {capabilities.map((item) => (
                                    <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-xl text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all duration-200"
                            >
                                Let's Build Yours →
                            </a>
                        </motion.div>

                        {/* Right — Spline 3D Scene */}
                        <motion.div
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={fadeRight}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                            className="flex-1 relative min-h-[260px]"
                        >
                            <SplineScene
                                scene={SPLINE_SCENE}
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
