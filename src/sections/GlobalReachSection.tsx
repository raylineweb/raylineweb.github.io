import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { Globe } from '@/components/ui/globe'

const stats = [
    { value: '120+', label: 'Projects Delivered' },
    { value: '18+', label: 'Countries Reached' },
    { value: '99%', label: 'Client Satisfaction' },
]

const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
}

const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
}

export default function GlobalReachSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="globe"
            ref={ref}
            className="relative min-h-screen bg-[#060608] overflow-hidden flex items-center"
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

            {/* Top fade from hero */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#060608] to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeLeft}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium tracking-wider uppercase">
                            Global Reach
                        </div>

                        <h2 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight tracking-tight text-foreground">
                            Empowering Local{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                Businesses
                            </span>{' '}
                            Worldwide
                        </h2>

                        <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                            From Mumbai to Manhattan, we design digital experiences that bridge
                            boundaries — giving local businesses a global-class presence that
                            drives real growth.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="space-y-1">
                                    <p className="text-3xl font-black text-foreground">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#hero"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Start your global journey →
                        </a>
                    </motion.div>

                    {/* Right — Globe */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeRight}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
                    >
                        {/* Glow behind globe */}
                        <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl" />
                        <Globe className="top-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
