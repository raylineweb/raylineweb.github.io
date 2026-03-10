import { useEffect, useRef } from 'react'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextGenerateEffectProps {
    words: string
    className?: string
    filter?: boolean
    duration?: number
}

export function TextGenerateEffect({
    words,
    className,
    filter = true,
    duration = 0.5,
}: TextGenerateEffectProps) {
    const [scope, animate] = useAnimate()
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: '-80px' })
    const wordsArray = words.split(' ')

    useEffect(() => {
        if (!isInView) return
        animate(
            'span',
            {
                opacity: 1,
                filter: filter ? 'blur(0px)' : 'none',
            },
            {
                duration: duration ?? 1,
                delay: stagger(0.08),
            },
        )
    }, [isInView, animate, filter, duration])

    return (
        <div ref={containerRef} className={cn('font-bold', className)}>
            <div className="mt-4">
                <div className="text-white text-xl md:text-2xl leading-relaxed tracking-wide">
                    <motion.div ref={scope}>
                        {wordsArray.map((word, idx) => (
                            <motion.span
                                key={word + idx}
                                className="opacity-0 inline"
                                style={{ filter: filter ? 'blur(8px)' : 'none' }}
                            >
                                {word}{' '}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
