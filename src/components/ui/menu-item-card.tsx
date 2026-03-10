import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

// Explicit props (no HTMLAttributes spread to avoid framer-motion onDrag type conflicts)
interface MenuItemCardProps {
    className?: string;
    style?: React.CSSProperties;
    imageUrl: string;
    isVegetarian: boolean;
    name: string;
    price: number;
    originalPrice: number;
    quantity: string;
    prepTimeInMinutes: number;
    onAdd: () => void;
}

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
};

const buttonVariants = {
    tap: { scale: 0.95 },
};

const vegIconVariants = {
    initial: { scale: 0 },
    animate: {
        scale: 1,
        transition: { delay: 0.3, type: 'spring' as const, stiffness: 200 },
    },
};

const MenuItemCard = React.forwardRef<HTMLDivElement, MenuItemCardProps>(
    (
        {
            className,
            style,
            imageUrl,
            isVegetarian,
            name,
            price,
            originalPrice,
            quantity,
            prepTimeInMinutes,
            onAdd,
        },
        ref,
    ) => {
        const savings = originalPrice - price;

        return (
            <motion.div
                ref={ref}
                style={style}
                className={cn(
                    'relative flex flex-col w-full overflow-hidden rounded-xl',
                    'border border-white/10 bg-card text-card-foreground shadow-md group',
                    className,
                )}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                layout
            >
                {/* Image + Add Button */}
                <div className="relative overflow-hidden rounded-t-xl">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="object-cover w-full h-44 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    {/* Veg / Non-Veg Indicator */}
                    <motion.div
                        className="absolute top-3 right-3"
                        variants={vegIconVariants}
                        aria-label={isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                        <div
                            className={cn(
                                'w-5 h-5 border-2 flex items-center justify-center rounded-sm bg-background/90',
                                isVegetarian ? 'border-green-500' : 'border-red-500',
                            )}
                        >
                            <div
                                className={cn(
                                    'w-2.5 h-2.5 rounded-full',
                                    isVegetarian ? 'bg-green-500' : 'bg-red-500',
                                )}
                            />
                        </div>
                    </motion.div>

                    {/* Add Button */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-full flex justify-center">
                        <motion.button
                            onClick={onAdd}
                            variants={buttonVariants}
                            whileTap="tap"
                            className={cn(
                                'px-7 py-1.5 text-xs font-bold uppercase tracking-widest',
                                'transition-all duration-300 transform translate-y-4',
                                'border border-white/30 rounded-lg shadow-lg opacity-0',
                                'bg-background/80 text-foreground backdrop-blur-sm',
                                'group-hover:opacity-100 group-hover:translate-y-0',
                                'hover:bg-white hover:text-black',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                            )}
                            aria-label={`Add ${name} to cart`}
                        >
                            + Add
                        </motion.button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-3.5 text-left">
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-base font-bold text-foreground">₹{price}</span>
                        <span className="text-xs line-through text-muted-foreground">₹{originalPrice}</span>
                        {savings > 0 && (
                            <span className="text-xs font-semibold text-green-400">SAVE ₹{savings}</span>
                        )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{quantity}</p>
                    <h3 className="mt-1.5 text-sm font-semibold leading-snug text-foreground">{name}</h3>
                    <div className="flex items-center gap-1 mt-auto pt-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{prepTimeInMinutes} mins</span>
                    </div>
                </div>
            </motion.div>
        );
    },
);

MenuItemCard.displayName = 'MenuItemCard';

export { MenuItemCard };
