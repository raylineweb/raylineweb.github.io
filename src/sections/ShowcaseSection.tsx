import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

export default function ShowcaseSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section
            id="showcase"
            ref={ref}
            className="relative bg-[#060608] overflow-hidden"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <ContainerScroll
                titleComponent={
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="px-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase text-muted-foreground mb-5">
                            Our Capabilities
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight mb-3">
                            Unleash the Power of
                        </h2>
                        <span className="block text-4xl md:text-[5rem] font-black leading-none bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent pb-1">
                            Modern Web Design
                        </span>
                        <p className="mt-5 text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                            From analytics dashboards to full-scale SaaS platforms — we engineer
                            every pixel with precision and purpose.
                        </p>
                    </motion.div>
                }
            >
                <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&q=90"
                    alt="High-end SaaS analytics dashboard — crafted by Rayline Studio"
                    className="mx-auto rounded-xl object-cover w-full h-full object-top select-none"
                    draggable={false}
                    loading="lazy"
                />
            </ContainerScroll>
        </section>
    )
}
