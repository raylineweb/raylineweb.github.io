import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, MessageSquare, Mail } from "lucide-react"
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave"
import { ChatInput, ChatInputTextArea, ChatInputSubmit } from "@/components/ui/chat-input"
import { ShootingStars } from "@/components/ui/shooting-stars"

interface QuotationChatProps {
    selectedPlan: { name: string; price: string }
    onBack: () => void
}

const WA_NUMBER = "917827599839"
const EMAIL_ADDRESS = "raylinewebstudio@gmail.com"

function getQuestions(planName: string, firstName: string): string[] {
    return [
        `Hi! Great choice selecting the ${planName} plan. What is your name and the name of your business?`,
        `Nice to meet you, ${firstName}. Briefly describe what your business does and what the main goal of this website is.`,
        "Do you have any specific design inspirations or websites you love? If not, briefly describe the look and feel you are going for.",
        "Great. Lastly, when are you hoping to launch this project and do you have a rough budget in mind beyond the plan price?",
    ]
}

function buildSummary(
    planName: string,
    price: string,
    questions: string[],
    answers: string[]
): string {
    const lines = [
        `New Project Inquiry - ${planName} Plan (${price}/month)`,
        "",
        ...questions.map((q, i) => `Q${i + 1}: ${q}\nA${i + 1}: ${answers[i] ?? "—"}`).join("\n\n").split("\n"),
    ]
    return lines.join("\n")
}

export default function QuotationChat({ selectedPlan, onBack }: QuotationChatProps) {
    const [answers, setAnswers] = useState<string[]>([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const [isComplete, setIsComplete] = useState(false)
    const [shimmerDone, setShimmerDone] = useState(false)

    const scrollRef = useRef<HTMLDivElement>(null)

    // Derive first name from the first answer (once it exists)
    const firstName = answers[0]?.split(" ")[0] ?? ""
    const questions = getQuestions(selectedPlan.name, firstName)

    // Reset shimmer animation cutoff each time a new question reveals
    useEffect(() => {
        setShimmerDone(false)
        const timer = setTimeout(() => setShimmerDone(true), 1800)
        return () => clearTimeout(timer)
    }, [currentQuestion])

    // Auto-scroll to bottom when answers grow
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [answers, currentQuestion, isComplete])

    const handleSubmit = () => {
        const trimmed = inputValue.trim()
        if (!trimmed) return

        const newAnswers = [...answers, trimmed]
        setAnswers(newAnswers)
        setInputValue("")

        if (currentQuestion < 3) {
            setCurrentQuestion((q) => q + 1)
        } else {
            setIsComplete(true)
        }
    }

    // Build and send via WhatsApp
    const handleWhatsApp = () => {
        const summary = buildSummary(selectedPlan.name, selectedPlan.price, questions, answers)
        const encoded = encodeURIComponent(summary.replace(/\n/g, "\n"))
        window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank")
    }

    // Build and send via Email
    const handleEmail = () => {
        const summary = buildSummary(selectedPlan.name, selectedPlan.price, questions, answers)
        const subject = encodeURIComponent(`New Project Inquiry - ${selectedPlan.name} Plan`)
        const body = encodeURIComponent(summary)
        window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`
    }

    return (
        <div
            className="min-h-screen bg-[#060608] flex flex-col relative overflow-hidden"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            {/* Shooting stars background */}
            <div className="absolute inset-0 pointer-events-none">
                <ShootingStars
                    starColor="#8b5cf6"
                    trailColor="#a78bfa"
                    minSpeed={12}
                    maxSpeed={28}
                    minDelay={1800}
                    maxDelay={4000}
                />
                <ShootingStars
                    starColor="#6d28d9"
                    trailColor="#c4b5fd"
                    minSpeed={8}
                    maxSpeed={20}
                    minDelay={2500}
                    maxDelay={5000}
                />
            </div>

            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-700/6 blur-[150px]" />
            </div>

            {/* ── HEADER ── */}
            <div className="relative z-10 flex items-center justify-between px-5 sm:px-8 py-5 border-b border-white/6">
                {/* Back button */}
                <button
                    onClick={onBack}
                    className="group inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                    Back to Plans
                </button>

                {/* Plan pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
                    </span>
                    {selectedPlan.name} Plan · ${selectedPlan.price}/month
                </div>
            </div>

            {/* ── CHAT AREA ── */}
            <div
                ref={scrollRef}
                className="relative z-10 flex-1 overflow-y-auto px-4 sm:px-0"
            >
                <div className="max-w-2xl mx-auto w-full py-10 space-y-8">

                    {/* Render completed Q&A pairs */}
                    {answers.map((answer, idx) => (
                        <motion.div
                            key={`pair-${idx}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="space-y-3"
                        >
                            {/* Previous question — small, left-aligned muted text */}
                            <p className="text-white/35 text-sm leading-relaxed pl-1">
                                {questions[idx]}
                            </p>

                            {/* Answer bubble — right-aligned */}
                            <div className="flex justify-end">
                                <div className="max-w-[80%] bg-violet-600/20 border border-violet-500/25 rounded-2xl rounded-tr-sm px-4 py-3 text-white/90 text-sm leading-relaxed">
                                    {answer}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Current question or completion screen */}
                    <AnimatePresence mode="wait">
                        {!isComplete ? (
                            <motion.div
                                key={`q-${currentQuestion}`}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="space-y-5"
                            >
                                {/* Progress indicator */}
                                <div className="flex items-center gap-3">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/30 text-xs font-medium">
                                        Question {currentQuestion + 1} of 4
                                    </div>
                                    <div className="flex gap-1">
                                        {[0, 1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className={`h-1 rounded-full transition-all duration-500 ${i <= currentQuestion
                                                    ? "w-6 bg-violet-500"
                                                    : "w-3 bg-white/10"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Active question with shimmer */}
                                <div className="text-lg sm:text-xl font-medium leading-relaxed">
                                    {shimmerDone ? (
                                        // Once shimmer finishes, render as plain white text (stops flickering)
                                        <span className="text-white/80">{questions[currentQuestion]}</span>
                                    ) : (
                                        <TextShimmerWave
                                            key={currentQuestion}
                                            duration={1.2}
                                            repeat={1}
                                            spread={2}
                                            className="text-white/80 [--base-color:rgba(255,255,255,0.5)] [--base-gradient-color:#ffffff]"
                                        >
                                            {questions[currentQuestion]}
                                        </TextShimmerWave>
                                    )}
                                </div>

                                {/* Chat Input */}
                                <div className="pt-2">
                                    <ChatInput
                                        variant="default"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onSubmit={handleSubmit}
                                        className="border-white/12 bg-white/4 backdrop-blur-sm focus-within:ring-violet-500/50 focus-within:border-violet-500/40"
                                    >
                                        <ChatInputTextArea
                                            placeholder="Type your answer… (Enter to send, Shift+Enter for new line)"
                                            className="text-white placeholder:text-white/25 bg-transparent text-sm"
                                            rows={2}
                                        />
                                        <ChatInputSubmit
                                            className="bg-violet-600 hover:bg-violet-500 border-violet-500 text-white disabled:opacity-30 disabled:bg-white/5 disabled:border-white/10"
                                        />
                                    </ChatInput>
                                </div>
                            </motion.div>
                        ) : (
                            /* ── COMPLETION SCREEN ── */
                            <motion.div
                                key="complete"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="space-y-8 pt-4"
                            >
                                {/* Heading */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-violet-400 text-sm font-medium mb-3">
                                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
                                        <span>All done!</span>
                                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                                        Perfect. We have everything we need.{" "}
                                        <span className="text-white/60 font-normal">
                                            How would you like to send this to us?
                                        </span>
                                    </h2>
                                </div>

                                {/* Send buttons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={handleWhatsApp}
                                        className="group flex items-center justify-center gap-3 px-6 py-5 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 text-[#25D366] font-semibold transition-all duration-200 active:scale-[0.98]"
                                    >
                                        <MessageSquare className="h-5 w-5 flex-shrink-0" />
                                        <span>Send via WhatsApp</span>
                                    </button>

                                    <button
                                        onClick={handleEmail}
                                        className="group flex items-center justify-center gap-3 px-6 py-5 rounded-2xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-500/50 text-violet-300 font-semibold transition-all duration-200 active:scale-[0.98]"
                                    >
                                        <Mail className="h-5 w-5 flex-shrink-0" />
                                        <span>Send via Email</span>
                                    </button>
                                </div>

                                {/* Reminders */}
                                <div className="space-y-2 pt-2 border-t border-white/6">
                                    <p className="text-white/35 text-xs flex items-start gap-2">
                                        <span className="text-amber-400/70 flex-shrink-0 mt-0.5">⚠</span>
                                        Reminder: A <span className="text-white/55 font-medium">50% upfront payment</span> is required to begin development.
                                    </p>
                                    <p className="text-white/35 text-xs flex items-start gap-2">
                                        <span className="text-white/25 flex-shrink-0 mt-0.5">•</span>
                                        All plans require a minimum <span className="text-white/55 font-medium">3-month commitment</span>.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
