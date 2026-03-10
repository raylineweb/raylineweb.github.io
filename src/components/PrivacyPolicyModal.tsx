import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface PrivacyPolicyModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [isOpen, onClose])

    // Prevent body scroll while open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal panel */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.96, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 16 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed z-[70] inset-0 flex items-center justify-center px-4"
                        aria-modal="true"
                        role="dialog"
                        aria-labelledby="privacy-title"
                    >
                        <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0e0e12] shadow-2xl p-8">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                aria-label="Close privacy policy"
                                className="absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Content */}
                            <h2
                                id="privacy-title"
                                className="text-xl font-bold text-foreground mb-6"
                            >
                                Privacy Policy
                            </h2>

                            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                                <p>
                                    <strong className="text-foreground">Rayline Studio</strong> respects your
                                    privacy. We do not use intrusive tracking cookies on this website.
                                </p>
                                <p>
                                    By contacting us via WhatsApp, you consent to us using your phone number
                                    solely for the purpose of communicating about your project. Your contact
                                    details will be used exclusively to respond to your enquiry and to discuss
                                    the scope of work.
                                </p>
                                <p>
                                    We will <strong className="text-foreground">never sell, rent, or share</strong> your
                                    personal data with any third party.
                                </p>
                                <p>
                                    This website may use anonymised analytics (page views only) to help us
                                    improve our content. No personally identifiable information is collected
                                    or stored.
                                </p>
                                <p className="text-xs text-muted-foreground/60 pt-2 border-t border-white/5">
                                    Last updated: March 2026 &nbsp;·&nbsp; Questions?{' '}
                                    <a
                                        href="mailto:hello@raylinestudio.com"
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        hello@raylinestudio.com
                                    </a>
                                </p>
                            </div>

                            <button
                                onClick={onClose}
                                className="mt-8 w-full py-3 rounded-xl text-sm font-semibold bg-white text-black hover:bg-white/90 active:scale-95 transition-all duration-200"
                            >
                                Got it
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
