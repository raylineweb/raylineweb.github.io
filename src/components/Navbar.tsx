import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

const WA_LINK =
    'https://wa.me/917827599839?text=Hi%20Rayline%20Studio!%20I%20am%20interested%20in%20getting%20a%20website%20built.%20Can%20we%20discuss%20my%20project?'

const navLinks = [
    { label: 'Work', href: '#versatility' },
    { label: 'Services', href: '#immersive' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || menuOpen
                        ? 'bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
                        <div className="relative w-7 h-7">
                            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center">
                                <span className="text-white font-black text-xs">R</span>
                            </div>
                        </div>
                        <span className="text-foreground font-semibold tracking-tight text-base">
                            Rayline<span className="text-blue-400">.</span>
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#25D366] text-white hover:bg-[#22c55e] transition-all duration-200"
                    >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Start a Project
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-foreground active:scale-95 transition-transform"
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-8 md:hidden"
                    >
                        <nav className="flex flex-col gap-1 flex-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07, duration: 0.3 }}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center py-4 text-2xl font-bold text-foreground border-b border-white/5 hover:text-blue-400 transition-colors active:scale-[0.98]"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>

                        {/* Mobile CTA at bottom */}
                        <motion.a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.35 }}
                            onClick={() => setMenuOpen(false)}
                            className="mt-8 flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-base active:scale-[0.97] transition-transform"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Start Your Project on WhatsApp
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
