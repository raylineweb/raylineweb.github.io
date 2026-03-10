import { cn } from '@/lib/utils';
import React from 'react';

interface DisplayCardProps {
    className?: string;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    date?: string;
    iconClassName?: string;
    titleClassName?: string;
}

function DisplayCard({
    className,
    icon,
    title = 'Featured',
    description = 'Discover amazing content',
    date = 'Just now',
    iconClassName = 'text-blue-500',
    titleClassName = 'text-blue-400',
}: DisplayCardProps) {
    return (
        <div
            className={cn(
                'relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between',
                'rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3',
                'transition-all duration-700',
                'after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem]',
                'after:bg-gradient-to-l after:from-background after:to-transparent after:content-[""]',
                'hover:border-white/20 hover:bg-white/10',
                '[&>*]:flex [&>*]:items-center [&>*]:gap-2',
                className,
            )}
        >
            <div>
                <span
                    className={cn(
                        'relative inline-flex items-center justify-center rounded-full p-2',
                        'bg-gradient-to-br from-blue-500/30 to-violet-500/30 ring-1 ring-white/20',
                        iconClassName,
                    )}
                >
                    {icon}
                </span>
                <p className={cn('text-lg font-semibold', titleClassName)}>{title}</p>
            </div>
            <p className="whitespace-nowrap text-base text-foreground/90">{description}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
        </div>
    );
}

interface DisplayCardsProps {
    cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
    const defaultCards = [
        {
            className:
                '[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[""] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
        },
        {
            className:
                '[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[""] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
        },
        {
            className:
                '[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10',
        },
    ];

    const displayCards = cards || defaultCards;

    return (
        <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
            {displayCards.map((cardProps, index) => (
                <DisplayCard key={index} {...cardProps} />
            ))}
        </div>
    );
}
