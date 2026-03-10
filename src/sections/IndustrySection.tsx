import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import DisplayCards from '@/components/ui/display-cards'
import { MenuItemCard } from '@/components/ui/menu-item-card'
import { Search, ShoppingCart, Code2 } from 'lucide-react'

// --- Display Cards data: digital services ---
const serviceCards = [
    {
        icon: <Code2 className="size-4 text-violet-300" />,
        title: 'Custom Web Apps',
        description: 'Bespoke applications built for scale',
        date: 'Fullstack · React · Node',
        iconClassName: 'text-violet-500',
        titleClassName: 'text-violet-400',
        className:
            '[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:rounded-xl before:h-full before:content-[""] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
    },
    {
        icon: <ShoppingCart className="size-4 text-blue-300" />,
        title: 'E-Commerce',
        description: 'High-converting storefronts',
        date: 'Shopify · WooCommerce · Custom',
        iconClassName: 'text-blue-500',
        titleClassName: 'text-blue-400',
        className:
            '[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:rounded-xl before:h-full before:content-[""] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
    },
    {
        icon: <Search className="size-4 text-emerald-300" />,
        title: 'SEO & Growth',
        description: 'Rank higher. Get found. Grow.',
        date: 'Technical SEO · Content · Analytics',
        iconClassName: 'text-emerald-500',
        titleClassName: 'text-emerald-400',
        className:
            '[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10',
    },
]

// --- MenuItemCard data: restaurant UI showcase ---
const menuItems = [
    {
        imageUrl:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
        isVegetarian: false,
        name: 'Signature Wagyu Burger',
        price: 649,
        originalPrice: 899,
        quantity: '250g · Serves 1',
        prepTimeInMinutes: 12,
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
        isVegetarian: true,
        name: 'Neapolitan Margherita',
        price: 449,
        originalPrice: 699,
        quantity: '10" · Wood-fired',
        prepTimeInMinutes: 15,
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=400&fit=crop',
        isVegetarian: true,
        name: 'Cold Brew Lychee Spritz',
        price: 199,
        originalPrice: 349,
        quantity: '400 ml',
        prepTimeInMinutes: 3,
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop',
        isVegetarian: false,
        name: 'Crispy Chicken Sandwich',
        price: 379,
        originalPrice: 549,
        quantity: 'Serves 1 · Extra sauce',
        prepTimeInMinutes: 10,
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

export default function IndustrySection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="versatility"
            ref={ref}
            className="relative bg-[#060608] py-28 overflow-hidden"
        >
            {/* Section top border line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-20 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                        Industry Versatility
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                        One Studio,{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                            Every Industry
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
                        Whether you run an online store or a neighbourhood café, we build
                        the digital foundation your business deserves.
                    </p>
                </motion.div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                    {/* Left — Display Cards (Digital Services) */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-foreground">Digital Services</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Scalable software solutions — from landing pages to full-stack
                                platforms — engineered for growth.
                            </p>
                        </div>

                        {/* Stacked card display */}
                        <div className="relative h-[300px] flex items-center justify-start pl-4">
                            <DisplayCards cards={serviceCards} />
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['React', 'TypeScript', 'Node.js', 'Shopify', 'SEO', 'CMS', 'UI/UX'].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-muted-foreground"
                                    >
                                        {tag}
                                    </span>
                                ),
                            )}
                        </div>
                    </motion.div>

                    {/* Right — Menu Item Cards (Physical Businesses) */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-foreground">Physical Businesses</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Tailored digital menus, ordering systems &amp; brand sites — built
                                for restaurants, cafés, and hospitality brands.
                            </p>
                        </div>

                        {/* 2×2 MenuItemCard grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {menuItems.map((item, i) => (
                                <MenuItemCard
                                    key={i}
                                    imageUrl={item.imageUrl}
                                    isVegetarian={item.isVegetarian}
                                    name={item.name}
                                    price={item.price}
                                    originalPrice={item.originalPrice}
                                    quantity={item.quantity}
                                    prepTimeInMinutes={item.prepTimeInMinutes}
                                    onAdd={() => console.log(`Added ${item.name}`)}
                                />
                            ))}
                        </div>

                        <p className="text-xs text-muted-foreground/60 italic pt-2">
                            * Example UI — built for a café client showcase
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
