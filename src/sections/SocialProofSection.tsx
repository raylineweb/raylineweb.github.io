import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee'
import { Marquee } from '@/components/ui/3d-testimonials'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

// --- Horizontal marquee testimonials ---
const marqueeTestimonials = [
    {
        author: {
            name: 'Arjun Menon',
            handle: '@arjun_eats',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        },
        text: "Rayline built our restaurant's online presence from scratch. Reservations are up 3× in two months.",
    },
    {
        author: {
            name: 'Lena Fischer',
            handle: '@lena_boutiq',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        },
        text: 'Our e-commerce store was redesigned by Rayline and the conversion rate jumped 45% overnight.',
    },
    {
        author: {
            name: 'Kevin Osei',
            handle: '@kevin_dev',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        },
        text: 'The custom SaaS dashboard they delivered is leagues ahead of our old system. Clean code, clean UI.',
    },
    {
        author: {
            name: 'Priya Kapoor',
            handle: '@priya_startups',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        },
        text: 'Rayline moved fast, communicated clearly, and delivered exactly what we envisioned.',
    },
    {
        author: {
            name: 'Diego Reyes',
            handle: '@diegotech',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        },
        text: 'SEO results were visible in 6 weeks. We now rank #1 for our primary keywords.',
    },
    {
        author: {
            name: 'Yuki Tanaka',
            handle: '@yukicafe',
            avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face',
        },
        text: "Our café's digital menu is beautiful and so easy to update. Customers compliment the design every day.",
    },
]

// --- Vertical marquee (simplified for mobile) ---
const reviews3D = [
    { name: 'Ava Green', username: '@ava_au', body: 'Rayline redesigned our entire brand. 10× better.', img: 'https://randomuser.me/api/portraits/women/32.jpg', country: '🇦🇺' },
    { name: 'Ana Miller', username: '@ana_de', body: 'The scroll animations blew our clients away!', img: 'https://randomuser.me/api/portraits/women/68.jpg', country: '🇩🇪' },
    { name: 'Mateo Rossi', username: '@mat_it', body: "Buttery smooth UI. Premium doesn't cover it.", img: 'https://randomuser.me/api/portraits/men/51.jpg', country: '🇮🇹' },
    { name: 'Priya Sharma', username: '@priya_in', body: 'Setup and handoff were incredibly fast.', img: 'https://randomuser.me/api/portraits/women/53.jpg', country: '🇮🇳' },
    { name: 'Noah Smith', username: '@noah_us', body: "Best agency we've worked with. Period.", img: 'https://randomuser.me/api/portraits/men/33.jpg', country: '🇺🇸' },
    { name: 'Lucas Stone', username: '@luc_fr', body: 'Our Shopify store revenue doubled in Q1.', img: 'https://randomuser.me/api/portraits/men/22.jpg', country: '🇫🇷' },
    { name: 'Haruto Sato', username: '@haru_jp', body: 'Flawless mobile performance. Client loved it.', img: 'https://randomuser.me/api/portraits/men/85.jpg', country: '🇯🇵' },
    { name: 'Emma Lee', username: '@emma_ca', body: 'The attention to typography detail is incredible.', img: 'https://randomuser.me/api/portraits/women/45.jpg', country: '🇨🇦' },
    { name: 'Carlos Ray', username: '@carl_es', body: 'Working with Rayline felt like a true partnership.', img: 'https://randomuser.me/api/portraits/men/61.jpg', country: '🇪🇸' },
]

function ReviewCard({ img, name, username, body, country }: (typeof reviews3D)[number]) {
    return (
        <Card className="w-44 border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-3">
                <div className="flex items-center gap-2">
                    <Avatar className="size-8">
                        <AvatarImage src={img} alt={name} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col min-w-0">
                        <figcaption className="text-xs font-semibold text-foreground truncate">
                            {name} <span className="opacity-70">{country}</span>
                        </figcaption>
                        <p className="text-[10px] text-muted-foreground truncate">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {body}
                </blockquote>
            </CardContent>
        </Card>
    )
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

export default function SocialProofSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section id="reviews" ref={ref} className="relative bg-[#060608] overflow-hidden">
            {/* Horizontal marquee */}
            <TestimonialsSection
                title="Trusted by Businesses Worldwide"
                description="From cafés to SaaS companies — our clients see real results"
                testimonials={marqueeTestimonials}
                className="bg-[#060608] border-t border-white/5"
            />

            {/* Vertical marquee — flat on mobile, 3-D tilt only on md+ */}
            <motion.div
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="py-16 md:py-20 px-4 md:px-6"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-10 space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                            Premium Clients
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black text-foreground leading-tight">
                            What Our Top Clients{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                Are Saying
                            </span>
                        </h3>
                    </div>

                    {/* On mobile: two simple vertical marquee columns with no 3D transform
              On desktop: four columns with perspective tilt */}
                    <div className="relative h-[360px] md:h-[420px] w-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
                        {/* Mobile: 2 columns, no 3D */}
                        <div className="flex md:hidden flex-row items-start justify-center gap-3 h-full">
                            <Marquee vertical pauseOnHover repeat={3} className="[--duration:30s]">
                                {reviews3D.map((r) => <ReviewCard key={r.username} {...r} />)}
                            </Marquee>
                            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:30s]">
                                {reviews3D.map((r) => <ReviewCard key={r.username} {...r} />)}
                            </Marquee>
                        </div>

                        {/* Desktop: 4 columns with 3D perspective */}
                        <div className="hidden md:flex flex-row items-start gap-3 h-full"
                            style={{ transform: 'translateX(-60px) translateZ(-80px) rotateX(18deg) rotateY(-8deg) rotateZ(18deg)' }}
                        >
                            <Marquee vertical pauseOnHover repeat={3} className="[--duration:35s]">
                                {reviews3D.map((r) => <ReviewCard key={r.username} {...r} />)}
                            </Marquee>
                            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:35s]">
                                {reviews3D.map((r) => <ReviewCard key={r.username} {...r} />)}
                            </Marquee>
                            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                                {reviews3D.map((r) => <ReviewCard key={r.username} {...r} />)}
                            </Marquee>
                            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                                {reviews3D.map((r) => <ReviewCard key={r.username} {...r} />)}
                            </Marquee>
                        </div>

                        {/* Gradient edges */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#060608]" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#060608]" />
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#060608]" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#060608]" />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
