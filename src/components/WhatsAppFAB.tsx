import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WA_LINK =
    'https://wa.me/917827599839?text=Hi%20Rayline%20Studio!%20I%20am%20interested%20in%20getting%20a%20website%20built.%20Can%20we%20discuss%20my%20project?'

export default function WhatsAppFAB() {
    return (
        <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start your project on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
        >
            {/* Outer pulse ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />

            {/* Button */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/40 cursor-pointer"
            >
                <MessageCircle className="w-6 h-6 text-white fill-white" strokeWidth={1.5} />
            </motion.div>
        </a>
    )
}
