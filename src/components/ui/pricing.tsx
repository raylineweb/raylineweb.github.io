import { buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Check, Star, X } from "lucide-react"
import { useState, useRef } from "react"
import confetti from "canvas-confetti"
import NumberFlow from "@number-flow/react"

interface PricingPlan {
    name: string
    price: number
    yearlyPrice: number
    yearlyBilled: string
    period: string
    features: string[]
    excludedFeatures: string[]
    description: string
    buttonText: string
    isPopular: boolean
    savingsLabel: string
    onGetQuote: () => void
}

interface PricingProps {
    plans: PricingPlan[]
    title?: string
    description?: string
}

export function Pricing({
    plans,
    title = "Simple, Transparent Pricing",
    description = "Choose the plan that works for you.\nAll plans include hosting, SSL, and dedicated support.",
}: PricingProps) {
    const [isMonthly, setIsMonthly] = useState(true)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const switchRef = useRef<HTMLButtonElement>(null)

    const handleToggle = (checked: boolean) => {
        setIsMonthly(!checked)
        if (checked && switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect()
            const x = rect.left + rect.width / 2
            const y = rect.top + rect.height / 2

            confetti({
                particleCount: 80,
                spread: 70,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
                colors: ["#a78bfa", "#8b5cf6", "#6d28d9", "#c4b5fd", "#ffffff"],
                ticks: 200,
                gravity: 1.2,
                decay: 0.94,
                startVelocity: 30,
                shapes: ["circle"],
            })
        }
    }

    // find the first popular plan's savings label for the switch
    const popularPlan = plans.find((p) => p.isPopular)
    const savingsText = popularPlan ? popularPlan.savingsLabel : "Save up to 30%"

    return (
        <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
                    {title}
                </h2>
                <p className="text-white/60 text-lg whitespace-pre-line max-w-xl mx-auto">
                    {description}
                </p>
            </div>

            {/* Billing toggle */}
            <div className="flex justify-center items-center gap-3 mb-14">
                <span className={cn("text-sm font-medium", isMonthly ? "text-white" : "text-white/50")}>
                    Monthly
                </span>
                <Label className="flex items-center cursor-pointer">
                    <Switch
                        ref={switchRef as React.RefObject<HTMLButtonElement>}
                        checked={!isMonthly}
                        onCheckedChange={handleToggle}
                    />
                </Label>
                <span className={cn("text-sm font-medium", !isMonthly ? "text-white" : "text-white/50")}>
                    Annual{" "}
                    <span className="ml-1 text-xs font-semibold text-violet-400 bg-violet-400/10 border border-violet-400/20 px-2 py-0.5 rounded-full">
                        {savingsText}
                    </span>
                </span>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto items-end">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={
                            isDesktop
                                ? {
                                    y: plan.isPopular ? -20 : 0,
                                    opacity: 1,
                                    x: index === 2 ? -20 : index === 0 ? 20 : 0,
                                    scale: index === 0 || index === 2 ? 0.95 : 1.0,
                                }
                                : { y: 0, opacity: 1 }
                        }
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.6,
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            delay: 0.1 + index * 0.1,
                            opacity: { duration: 0.5 },
                        }}
                        className={cn(
                            "rounded-2xl border p-6 relative flex flex-col",
                            plan.isPopular
                                ? "border-violet-500/70 bg-gradient-to-b from-violet-950/60 to-[#0d0b14] shadow-xl shadow-violet-500/10"
                                : "border-white/10 bg-gradient-to-b from-white/5 to-[#060608]",
                            !plan.isPopular && "mt-5 md:mt-0",
                        )}
                    >
                        {/* Popular badge */}
                        {plan.isPopular && (
                            <div className="absolute top-0 right-0 bg-violet-600 py-0.5 px-3 rounded-bl-xl rounded-tr-xl flex items-center gap-1">
                                <Star className="text-white h-3.5 w-3.5 fill-current" />
                                <span className="text-white text-xs font-semibold">Popular</span>
                            </div>
                        )}

                        {/* Plan name */}
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                            {plan.name}
                        </p>

                        {/* Price */}
                        <div className="flex items-end gap-1 mb-1">
                            <span className="text-5xl font-black tracking-tight text-white">
                                <NumberFlow
                                    value={isMonthly ? plan.price : plan.yearlyPrice}
                                    format={{
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    }}
                                    transformTiming={{ duration: 500, easing: "ease-out" }}
                                    willChange
                                />
                            </span>
                            <span className="text-white/40 text-sm mb-2">/ {plan.period}</span>
                        </div>

                        <p className="text-xs text-white/30 mb-2">
                            {isMonthly
                                ? "billed monthly"
                                : `billed annually · ${plan.yearlyBilled}`}
                        </p>

                        {/* Description */}
                        <p className="text-white/50 text-sm leading-relaxed mb-6 border-b border-white/8 pb-6">
                            {plan.description}
                        </p>

                        {/* Included features */}
                        <ul className="space-y-2.5 flex-1 mb-4">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                    <span className="mt-0.5 flex-shrink-0 h-4 w-4 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
                                        <Check className="h-2.5 w-2.5 text-violet-400" />
                                    </span>
                                    <span className="text-white/75 text-sm text-left">{feature}</span>
                                </li>
                            ))}

                            {/* Excluded features */}
                            {plan.excludedFeatures.map((feature, idx) => (
                                <li key={`excl-${idx}`} className="flex items-start gap-2.5">
                                    <span className="mt-0.5 flex-shrink-0 h-4 w-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                        <X className="h-2.5 w-2.5 text-white/25" />
                                    </span>
                                    <span className="text-white/25 text-sm text-left line-through">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <hr className="border-white/8 mb-5" />

                        {/* CTA button */}
                        <button
                            onClick={plan.onGetQuote}
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "w-full text-sm font-semibold tracking-wide py-5",
                                "transition-all duration-300",
                                plan.isPopular
                                    ? "bg-violet-600 text-white border-violet-500 hover:bg-violet-500 hover:ring-2 hover:ring-violet-400 hover:ring-offset-2 hover:ring-offset-[#0d0b14]"
                                    : "bg-white/5 text-white border-white/15 hover:bg-white/10 hover:border-white/25 hover:ring-2 hover:ring-white/20 hover:ring-offset-1 hover:ring-offset-[#060608]",
                            )}
                        >
                            {plan.buttonText}
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
