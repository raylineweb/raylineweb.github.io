import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
    { label: 'Work', href: '#versatility' },
    { label: 'About', href: '#globe' },
    { label: 'Services', href: '#versatility' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
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

                {/* Links */}
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

                {/* CTA */}
                <a
                    href="#hero"
                    className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all duration-200"
                >
                    Start a Project
                </a>
            </div>
        </motion.nav>
    )
}
