import { Suspense, lazy } from 'react'
import { cn } from '@/lib/utils'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

function SplineLoader() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
                <span className="text-xs text-white/40 tracking-wide">Loading 3D Scene...</span>
            </div>
        </div>
    )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense fallback={<SplineLoader />}>
            <Spline scene={scene} className={cn('w-full h-full', className)} />
        </Suspense>
    )
}
