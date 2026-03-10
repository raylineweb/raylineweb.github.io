import { cn } from '@/lib/utils'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
    const Card = href ? 'a' : 'div'

    return (
        <Card
            {...(href ? { href } : {})}
            className={cn(
                'flex flex-col rounded-xl border border-white/10',
                'bg-gradient-to-b from-white/5 to-white/[0.02]',
                'p-4 text-start sm:p-6',
                'hover:from-white/8 hover:to-white/5',
                'max-w-[320px] sm:max-w-[320px]',
                'transition-colors duration-300',
                className,
            )}
        >
            <div className="flex items-center gap-3">
                <Avatar className="h-11 w-11 ring-2 ring-white/10">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-sm font-semibold leading-none text-foreground">{author.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{author.handle}</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{text}</p>
        </Card>
    )
}
