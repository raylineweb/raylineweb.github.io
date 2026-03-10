import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { Globe } from '@/components/ui/globe'

const stats = [
    { value: '120+', label: 'Projects Delivered' },
    { value: '18+', label: 'Countries Reached' },
    { value: '99%', label: 'Client Satisfaction' },
]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

export default function GlobalReachSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="globe"
            ref={ref}
            className="relative bg-[#060608] overflow-hidden"
        >
            {/* Subtle grid lines */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#060608] to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 md:py-24 w-full">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    {/* Text — always on top on mobile */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-full lg:flex-1 space-y-6 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium tracking-wider uppercase">
                            Global Reach
                        </div>

                        <h2 className="text-3xl md:text-5xl xl:text-6xl font-black leading-tight tracking-tight text-foreground">
                            Empowering Local{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                Businesses
                            </span>{' '}
                            Worldwide
                        </h2>

                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                            From London to Los Angeles, we design digital experiences that bridge
                            boundaries — giving local businesses a global-class presence that
                            drives real growth.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-2">
                            {stats.map((stat) => (
                                <div key={stat.label} className="space-y-1">
                                    <p className="text-2xl md:text-3xl font-black text-foreground">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Start your global journey →
                        </a>
                    </motion.div>

                    {/* Globe — constrained height on mobile */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="relative w-full lg:flex-1 h-[300px] md:h-[420px] lg:h-[560px] flex items-center justify-center"
                    >
                        <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl" />
                        <Globe className="top-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
