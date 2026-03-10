import React, { useRef } from 'react'
import { useScroll, useTransform, useSpring, motion, type MotionValue } from 'framer-motion'

export const ContainerScroll = ({
    titleComponent,
    children,
}: {
    titleComponent: string | React.ReactNode
    children: React.ReactNode
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Raw transforms
    const rotateRaw = useTransform(scrollYProgress, [0, 0.5], [20, 0])
    const scaleRaw = useTransform(
        scrollYProgress,
        [0, 0.5],
        isMobile ? [0.8, 0.95] : [1.05, 1],
    )
    const translateRaw = useTransform(scrollYProgress, [0, 0.5], [0, -60])

    // Smooth with useSpring — eliminates jitter
    const springConfig = { stiffness: 80, damping: 20, mass: 0.5 }
    const rotate = useSpring(rotateRaw, springConfig)
    const scale = useSpring(scaleRaw, springConfig)
    const translate = useSpring(translateRaw, springConfig)

    return (
        <div
            className="h-[50rem] md:h-[70rem] flex items-center justify-center relative p-2 md:p-20"
            ref={containerRef}
        >
            <div className="py-10 md:py-32 w-full relative" style={{ perspective: '1000px' }}>
                <Header translate={translate} titleComponent={titleComponent} />
                <Card rotate={rotate} scale={scale}>
                    {children}
                </Card>
            </div>
        </div>
    )
}

export const Header = ({
    translate,
    titleComponent,
}: {
    translate: MotionValue<number>
    titleComponent: string | React.ReactNode
}) => {
    return (
        <motion.div
            style={{ translateY: translate, willChange: 'transform' }}
            className="max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    )
}

export const Card = ({
    rotate,
    scale,
    children,
}: {
    rotate: MotionValue<number>
    scale: MotionValue<number>
    children: React.ReactNode
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                willChange: 'transform',
                boxShadow:
                    '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026',
            }}
            className="max-w-5xl -mt-12 mx-auto h-[28rem] md:h-[38rem] w-full border-2 border-[#2a2a2a] p-2 md:p-6 bg-[#111] rounded-[24px] shadow-2xl"
        >
            <div className="h-full w-full overflow-hidden rounded-xl bg-zinc-900 md:rounded-xl md:p-4">
                {children}
            </div>
        </motion.div>
    )
}
