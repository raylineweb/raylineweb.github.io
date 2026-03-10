import { motion, type Variants } from 'framer-motion'
import { DottedSurface } from '@/components/ui/dotted-surface'
import { GooeyText } from '@/components/ui/gooey-text-morphing'
import { ArrowRight } from 'lucide-react'

const words = ['Design', 'Engineering', 'Is', 'Limitless']

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#060608]"
        >
            {/* Animated dot grid background */}
            <DottedSurface className="absolute inset-0 w-full h-full" />

            {/* Radial vignette to fade dots toward edges */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_30%,#060608_100%)] pointer-events-none" />

            {/* Bottom fade to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060608] to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">
                {/* Badge */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                    <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
                        A Creative Digital Agency
                    </span>
                </motion.div>

                {/* Agency name */}
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    className="text-sm font-medium tracking-[0.3em] uppercase text-blue-400/80 mb-4"
                >
                    Rayline Studio
                </motion.p>

                {/* GooeyText morphing — fixed height container, centered text */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                    className="w-full"
                >
                    <GooeyText
                        texts={words}
                        morphTime={1.2}
                        cooldownTime={2}
                        className="h-[80px] md:h-[120px]"
                        textClassName="font-black text-[72px] md:text-[104px] leading-none tracking-tight"
                    />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                    className="mt-4 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                    We craft{' '}
                    <span className="text-foreground font-medium">premium digital experiences</span> for
                    ambitious businesses — from custom web apps to full brand identities.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.65 }}
                    className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10"
                    >
                        Start Your Project
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#globe"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-200"
                    >
                        See Our Work
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    )
}
