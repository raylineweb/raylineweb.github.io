import { motion } from "framer-motion"
import { ArrowLeft, ClipboardList } from "lucide-react"

interface QuotationQuestionnaireProps {
    onBack: () => void
}

export default function QuotationQuestionnaire({ onBack }: QuotationQuestionnaireProps) {
    return (
        <div className="min-h-screen bg-[#060608] flex flex-col items-center justify-center px-6 relative">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-violet-700/8 blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 text-center max-w-xl mx-auto space-y-8"
            >
                {/* Icon */}
                <div className="flex justify-center">
                    <div className="h-20 w-20 rounded-2xl bg-violet-600/15 border border-violet-500/25 flex items-center justify-center">
                        <ClipboardList className="h-9 w-9 text-violet-400" />
                    </div>
                </div>

                {/* Headline */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-black text-white tracking-tight">
                        Quotation Questionnaire
                    </h1>
                    <p className="text-white/50 text-lg leading-relaxed">
                        We're building an interactive quote form in Phase 2.<br />
                        It'll help us understand your project and craft a precise proposal.
                    </p>
                </div>

                {/* Status badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
                    </span>
                    Phase 2 — Coming Soon
                </div>

                {/* Back button */}
                <div className="pt-4">
                    <button
                        onClick={onBack}
                        className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm border border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                        Back to Pricing
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
